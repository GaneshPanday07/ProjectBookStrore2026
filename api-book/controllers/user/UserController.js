const User = require("../../models/User");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const addUser = async (req, res) => {
  try {
    //console.log(req.body);
    let user = await User.findOne({ email: req.body.email, userType: 'user' })
    if(user){
        res.status(400).send({message: 'user already exsits' })
    } else{
        let password = bcrypt.hashSync(req.body.password, 10);
        let user = new User(req.body)
        user.password = password;
        await user.save()
        res.status(200).send({ success: true, message: 'WelCome to our platform. please Login' });
    }
  } catch (err) {
    console.log(err);
    res.status(400).send({ success: false });
  }
};

const doUserLogin = async(req, res) => {
  try{
    console.log(req.body)
    let user = await User.findOne({ email: req.body.email})
    if(!user){
      res.status(400).send({ message: 'invalid User/PassWord' });
    }else{
      let ValidUser = await bcrypt.compare(req.body.password, user.password)
      if(ValidUser) {
        user.lastLogin = new Date();
        await user.save()
        let secret_key = "b2Vfb3ZlcnRoZXJlX29yX3NvbWV0aGluZ19lbHNld2hlcmU";
        let token = jwt.sign({ _id: user._id, email: user.email }, secret_key, { expiresIn: '3hr' });
        console.log(token, 'token')
        let data = {
          email: user.email,
          name: user.firstName,
          token: token
        }
        res.status(200).send({ data: data });
      }else {
        res.status(400).send({ message: "invalid User/PassWord" });
      }
    }
    
  } catch(err) {
    res.status(400).send({ message: 'Something went Wrong..'})
  }
}

module.exports = {
  addUser,
  doUserLogin,
};