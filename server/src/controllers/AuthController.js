import User from "../model/User.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
// Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET|| "123456", {
        expiresIn: '1h',
    });
};

// @desc    Register a new user
// @route   POST /api/auth/register
const registerUser = async (req, res) => {
    const { name, email, password, classes, stream, number } = req.body;
    console.log(name, password,  classes, number)
    try {
        if (!name || !email || !password ) {
            return res.status(400).json({ success: false, message: 'Please enter all fields' });
        }

        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ success: false, message: 'User already exists' });
        }
        const hashPassword = await bcrypt.hash(password, 10);
        console.log(hashPassword)
        const user = new User({
            name,
            email,
            password: hashPassword,
            classes,
            stream: stream ? stream : '',
            phone: number
        })
        await user.save()
        console.log(user)
        if (user) {
            res.status(201).json({
                data: {
                    _id: user._id,
                    username: user.username,
                    email: user.email,
                    role: user.role,
                   
                },
                message: 'register successfully'
            });

        } else {
            res.json({ message: 'Invalid user data' });
        }
    } catch (err) {
        res.json({  message: err.message })
        console.log(err.message)
    }
};

// @desc    Authenticate user & get token
// @route   POST /api/auth/login
const loginUser = async (req, res) => {
    const { email, password } = req.body;


    try {
        const user = await User.findOne({ email: email });
        if (!user) {
            res.status(401).json({ success: false, message: 'Invalid email' });
            return;

        }

        const hashPassword = await bcrypt.compare(password, user.password);


        if (user && hashPassword) {
            res.json({
                success: true,
                user: {
                    _id: user._id,
                    user: user.name,
                    email: user.email,
                   
                    token: generateToken(user._id),
                },
                message: "login successfully"

            });
        } else {
            res.status(401).json({ success: false, message: 'Invalid password' });
        }
    } catch (err) {
        res.status(401).json({ success: false, message: err.message });
        console.log(err.message)

    }
};

const getUserProfile = async (req, res) =>{
    try{
    const token = req.params.token;
    const id = jwt.decode(token, process.env.JWT_SECRET || "123456");
    const result = await User.findById(id.id).select('-password');
    res.status(200).json({user: result});
} catch (error) {
    res.status(401).json({ success: false, message: error.message });
    console.log(error.message);
}
}

export { registerUser, loginUser, getUserProfile };
