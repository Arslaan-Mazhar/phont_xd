
//api/login.js
// export default async (req, res) => {
//     if (req.method === 'POST') {
//       const { email, password } = req.body;
//       // Handle your login logic here (e.g., authenticate user)
//       // For now, just respond with success
//       res.status(200).json({ message: 'Login successful' });
//     } else {
//       res.status(405).json({ message: 'Method not allowed' });
//     }
//   };
  
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        // Handle POST request
        res.status(200).json({ message: 'Login successful' });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

