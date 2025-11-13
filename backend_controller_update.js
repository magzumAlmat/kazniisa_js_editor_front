const logIn = async (req, res) => {
    console.log('iam in auth user');
    const { email, username, password } = req.body;

    let user;
    if (email) {
        user = await User.findOne({ where: { email: email } });
    } else if (username) {
        user = await User.findOne({ where: { username: username } });
    } else {
        return res.status(400).json({ error: 'Email or username is required' });
    }

    if (!user) {
        return res.status(401).json({ error: 'Invalid email/username or password' });
    }

    let isPasswordValid = false;
    if (password === user.password) {
        isPasswordValid = true;
    }

    console.log(user, 'COMPARE=', password, '==', user.password, 'isMtch=', isPasswordValid);
    if (!isPasswordValid) {
        return res.status(401).json({ error: 'Invalid email/username or password' });
    }

    const tokenPayload = {
        id: user.id,
        email: user.email,
        password: user.password, // Consider removing password from token payload for security
    };

    // Add username to token payload if it exists on the user object
    if (user.username) {
        tokenPayload.username = user.username;
    }

    const token = jwt.sign(tokenPayload, jwtOptions.secretOrKey, {
        expiresIn: 24 * 60 * 60 * 365
    });

    res.status(200).json({ prompt: 'Authorization successful', token });
};