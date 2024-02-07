const staff = require("../models/Staff");
const otp = require("../models/Otp");
const user = require("../models/User");
const fs = require('fs');
require('dotenv').config({ path: 'cred.env' });


exports.addStaff = async (req, res) => {
    try {
        const data = req.body;

      for (const item of data) {
        await staff.create({
          staff_id: item.staff_id, // Add the staff_id field from the JSON data
          id_no: item.id_no,
          full_name: item.full_name,
          mobile: item.mobile,
          email: item.email,
          role: item.role,
          staff_status: item.staff_status,
          staff_college_code: item.staff_college_code, // Use staff_college_code
          qr_code: `${process.env.HOST}/images/qr_codes/${item.qr_code}`   // Use environment variables
        });
      }
      res.status(200).json({ message: "Staff data added successfully" });
    //   console.log('Staff data added successfully');
   
  
    } catch (error) {
      console.error(error);
      
    }
};



exports.addUser = async (req,res) => {
    const {staffId} = req.params;

    try{
      await user.create({user_staff_id: staffId});
      
      res.status(200).json({ message: "User created successfully" });

    }catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error in adding user" });
    }

}



exports.sendOtp = async (req, res) => {
    try {
        const { email, otpValue } = req.body;
        const data = await staff.findOne(
            { where: { email: email } },
            { attributes: ['staff_id'] }
        );
        console.log(data.staff_id);
        if (data) {
            const userData = await user.findOne(
                { where: { user_staff_id: data.staff_id } },
                { attributes: ['user_id'] }
            );
            console.log(userData.user_id);
            if (userData) {
                const currentDateTime = new Date();
                const expiryDateTime = new Date(currentDateTime);
                expiryDateTime.setMinutes(currentDateTime.getMinutes() + 5);
                
               const userExits = await otp.findOne({where:{user_id:userData.user_id}});
               if(userExits){
                await otp.update(
                    {
                        otp: otpValue,
                        created_at: currentDateTime,
                        expiry_at: expiryDateTime
                    },
                    {
                        where: { user_id: userData.user_id }
                    }
                );
               }
               else{
                 await otp.create({
                    user_id:userData.user_id,
                    otp:otpValue,
                    created_at:currentDateTime,
                    expiry_at:expiryDateTime
                   })
               }

                res.status(200).json({ message: "OTP sent successfully" });
            } else {
                res.status(200).json({ message: "No User found with this email" });
            }
        } else {
            res.status(200).json({ message: "No Staff found with this email" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error occurred in sending OTP to user" });
    }
};



exports.verifyOtp = async (req, res) => {
    const { email, otpValue } = req.body;

    try {
        const data = await staff.findOne(
            { where: { email: email } },
            { attributes: ['staff_id'] }
        );

        if (data) {
            const userData = await user.findOne(
                { where: { user_staff_id: data.staff_id } },
                { attributes: ['user_id'] }
            );

            if (userData) {
                const currentDateTime = new Date();

                const otpRecord = await otp.findOne({
                    where: { user_id: userData.user_id, otp: otpValue },
                    attributes: ['expiry_at']
                });

                if (otpRecord !== null) {
                    if (currentDateTime < new Date(otpRecord.expiry_at)) {
                        // OTP is valid, user can log in
                        res.status(200).json({"isLogin": true, "username":data.full_name,"collegeCode": data.staff_college_code, "role": data.role});
                    } else {
                        // OTP is expired
                        res.status(200).json({"isLogin": false, message: "OTP has expired. Please request a new OTP." });
                    }
                } else {
                    // User entered the wrong OTP
                    res.status(200).json({"isLogin": false, message: "User entered the wrong OTP" });
                }
            } else {
                res.status(200).json({"isLogin": false, message: "No User found with this email" });
            }
        } else {
            res.status(200).json({ "isLogin": false,message: "No Staff found with this email" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({"isLogin": false, message: "Error occurred in verifying OTP to user" });
    }
};
