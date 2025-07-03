# Gabriel Q. Lugtu - Portfolio with Admin Panel

A modern, responsive portfolio website with an integrated admin panel for managing contact messages.

## Features

### Portfolio
- Modern, responsive design with neon aesthetics
- Smooth animations and transitions
- Contact form for visitors
- Professional sections: About, Skills, Projects, Contact

### Admin Panel
- Secure login system
- Message management dashboard
- Real-time message filtering and search
- Message status tracking (read/unread)
- Reply functionality
- Message deletion

## Admin Access

### Login Credentials
- **Username:** `admin`
- **Password:** `admin123`

### Access Methods
1. **Direct URL:** Navigate to `admin.html`
2. **Footer Link:** Click the gear icon (⚙️) in the footer of the main portfolio

## How to Use

### For Visitors
1. Browse the portfolio sections
2. Fill out the contact form with your message
3. Submit the form to send a message

### For Admin
1. **Login:** Use the credentials above to access the admin panel
2. **View Messages:** All contact form submissions appear in the dashboard
3. **Filter Messages:** Use the status filter and search functionality
4. **Manage Messages:**
   - Click on any message to view full details
   - Mark messages as read/unread
   - Reply to messages (simulated)
   - Delete messages
5. **Statistics:** View total messages, unread count, and today's messages

## File Structure

```
portfolio/
├── index.html              # Main portfolio page
├── admin.html              # Admin login page
├── admin-dashboard.html    # Admin dashboard
├── styles.css              # Main portfolio styles
├── admin-styles.css        # Admin login styles
├── admin-dashboard-styles.css # Dashboard styles
├── script.js               # Main portfolio JavaScript
├── admin.js                # Admin login JavaScript
├── admin-dashboard.js      # Dashboard functionality
├── README.md               # This file
└── assets/
    ├── granite.png         # Logo
    ├── gab.jpg            # Profile image
    └── about.jpg          # About section image
```

## Technical Details

### Data Storage
- Messages are stored in browser localStorage
- No server required for basic functionality
- Messages persist between sessions

### Security
- Simple client-side authentication
- Session timeout after 24 hours
- Admin credentials are hardcoded (change for production)

### Browser Compatibility
- Modern browsers with ES6+ support
- Responsive design for all screen sizes
- Progressive enhancement for older browsers

## Customization

### Changing Admin Credentials
Edit the `admin.js` file and update the login validation:

```javascript
if (username === 'your-username' && password === 'your-password') {
    // Login logic
}
```

### Styling
- All styles use CSS custom properties for easy theming
- Color scheme can be modified in the `:root` section of CSS files
- Animations and effects can be customized

### Adding Features
- The admin dashboard is modular and extensible
- New message management features can be added easily
- Backend integration can replace localStorage for production use

## Production Considerations

For production deployment, consider:

1. **Backend Integration:** Replace localStorage with a proper database
2. **Email Service:** Implement real email sending for contact form and replies
3. **Security:** Use proper authentication and HTTPS
4. **Hosting:** Deploy to a web server with SSL certificate
5. **Backup:** Implement regular data backups

## Support

For questions or issues, please contact the developer through the portfolio contact form.

---

**Note:** This is a demonstration system. For production use, implement proper security measures and backend services. 