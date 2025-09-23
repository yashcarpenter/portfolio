# EmailJS Setup Guide

## Quick Setup Steps

### 1. Create EmailJS Account
- Go to: https://www.emailjs.com/
- Sign up with: yashcarpenter@outlook.com
- Verify your email

### 2. Add Email Service
- Dashboard → Email Services → Add New Service
- Choose: Outlook
- Connect your Outlook account
- Copy Service ID: `service_xxxxxxxxx`

### 3. Create Email Template
- Dashboard → Email Templates → Create New Template
- Name: Portfolio Contact Form
- Subject: `New Contact Form Message from {{from_name}}`
- Content:
```
You have received a new message from your portfolio contact form.

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Sent from: Your Portfolio Website
```
- Copy Template ID: `template_xxxxxxxxx`

### 4. Get Public Key
- Dashboard → Account → General
- Copy Public Key: `xxxxxxxxxxxxxxxxx`

### 5. Update Code
Replace these values in `src/app/contact/page.tsx`:

```typescript
const serviceId = 'service_xxxxxxxxx'; // Your service ID
const templateId = 'template_xxxxxxxxx'; // Your template ID  
const publicKey = 'xxxxxxxxxxxxxxxxx'; // Your public key
```

## Test Your Setup

1. Start your development server: `npm run dev`
2. Go to: http://localhost:3000/contact
3. Fill out the contact form
4. Click "Send Message"
5. Check your Outlook inbox for the email

## Troubleshooting

- **Error sending email**: Check if all IDs are correct
- **No email received**: Check spam folder
- **Service not found**: Make sure service is connected
- **Template not found**: Verify template ID is correct

## Free Plan Limits

- 200 emails per month
- Perfect for portfolio websites
- No credit card required
