// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import sgMail from '@sendgrid/mail';
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
// sgMail.setApiKey(`123`);

export default function handler (req, res) {

    if(req.method == 'POST') {
        const data = JSON.parse(req.body)

        const message = {}
        
        sgMail.send({
            to: 'mmellows1@gmail.com', 
            from: 'matthew.mellows@themellowsproject.com', 
            subject:'test', 
            html: req.body
        });

    } else {
        res.status(403).json({ name: 'John Doe' })
    }
}
