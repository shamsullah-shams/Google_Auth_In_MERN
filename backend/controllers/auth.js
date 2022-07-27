import User from "../models/user.js";

// @@ === handling google auth 
export const GoogelSignIn = async (req, res, next) => {
    const { name, email, email_verified } = req.body;
    try {
        // @@ === Checking if user exist
        const user = await User.findOne({ where: { email: email } });
        if (!user) {
            const result = await User.create({
                name: name,
                email: email,
                email_verified: email_verified,
            })
            return res.status(201).send(result);
        }
        return res.status(200).send(user);
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
}