import React from 'react';
import * as emailjs from 'emailjs-com';
import NavbarUnRe from './Mainpage/navbar_unre';
import NavbarRe from './Mainpage/navbar_re';
import Footer from './Mainpage/footer';

import { Field, Label, Control, Input, Button, Textarea} from 'rbx';

class ContactForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
      isSubmitted : false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, email, subject, message } = this.state;
    const templateParams = {
      from_name: name,
      from_email: email,
      subject,
      message_html: message,
    };
 
    emailjs.send(
      'service_bvv1swd',
      'template_jw5jc8e',
       templateParams,
      'user_7yq9ppXNJ7Gtj7xV5ZFTk'
    )

    this.setState({
      isSubmitted: true
    })

    this.resetForm();

    setTimeout(() => {
      // After 3 seconds banner disappears
      this.setState({
        isSubmitted: false
      })
    }, 3000)

  };

  resetForm() {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const token = localStorage.getItem("token")
      

      var isAuthenticated = false
      

      if(token==null) {
        isAuthenticated = false
      }
      else {
        isAuthenticated = true
      }

    const { name, email, subject, message } = this.state;

    return (
      <body>
        {isAuthenticated ? <NavbarRe /> : <NavbarUnRe/>}
        {this.state.isSubmitted && <section class="hero is-small is-primary" id="contactbanner">
            <div class="hero-body">
            <p class="title">
            Your issue is sent
            </p>
            <p class="subtitle">
            We will get back to you as soon as possible
            </p>
            </div>
            </section>}
      <form onSubmit={this.handleSubmit} id="contactform">
        <Field id="sendername">
          <Label>Name</Label>
          <Control>
            <Input
              name="name"
              type="text"
              placeholder="Your first and last name"
              value={name}
              onChange={this.handleChange}
              required
            />
          </Control>
        </Field>
        <Field>
          <Label>Email for contact</Label>
          <Control>
            <Input
              name="email"
              type="email"
              placeholder="e.g bobsmith@gmail.com"
              value={email}
              onChange={this.handleChange}
              required
            />
          </Control>
        </Field>
        <Field>
          <Label>Subject</Label>
          <Control>
            <Input
              name="subject"
              type="text"
              placeholder="What is the subject?"
              value={subject}
              onChange={this.handleChange}
              required
            />
          </Control>
        </Field>
        <Field>
          <Label>Message</Label>
          <Control>
            <Textarea
              name="message"
              placeholder="Tell us more about it"
              value={message}
              onChange={this.handleChange}
              required
            />
          </Control>
        </Field>

        <Field kind="group">
          <Control>
            <Button color="dark">Send</Button>
          </Control>
        </Field>
      </form>
      <Footer />
      </body>
    );
  }
}

export default ContactForm;