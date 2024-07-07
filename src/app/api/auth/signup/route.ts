//api/signup.js
export default async (req, res) => {
    if (req.method === 'POST') {
      const { username, email, password } = req.body;
      // Handle your sign-up logic here (e.g., save to database)
      // For now, just respond with success
      res.status(200).json({ message: 'Sign-up successful' });
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  };
  