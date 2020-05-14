import React, { useState } from 'react';
import { Typography, Dialog, DialogTitle, DialogActions, DialogContent, TextField, Button, makeStyles } from '@material-ui/core';
import { Section } from '.';
import { sendContactForm } from '../../Api';

const useStyles = makeStyles(_ => ({
  contactForm: {
    marginTop: '2rem'
  },
  bottomMargin: {
    marginBottom: '1rem'
  }
}));

const ContactFormDialog = (props: {
  open: boolean,
  onClose: () => void
}) => {
  const classes = useStyles();
  const { open, onClose } = props;
  const [name, setName] = useState('');
  const [from, setFrom] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const submit = (e: any) => {
    e && e.preventDefault();
    sendContactForm({ name, from, message }).then(_ => {
      setSent(true);
      window.setTimeout(() => {
        onClose();
        setSent(false);
      }, 1500);
    });
    return false;
  }

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>
        Would you like to get in touch?
      </DialogTitle>
      <DialogContent>
        <Typography variant="body1" component="form" onSubmit={submit}>
          <TextField className={classes.bottomMargin} fullWidth variant="outlined" size="small" name="name" placeholder="Your name" value={name} onChange={(e: any) => setName(e.target.value)} />
          <TextField className={classes.bottomMargin} fullWidth variant="outlined" size="small" name="from" placeholder="Your e-mail address" value={from} onChange={(e: any) => setFrom(e.target.value)} />
          <TextField fullWidth variant="outlined" size="small" name="message" placeholder="Message" rows={5} value={message} onChange={(e: any) => setMessage(e.target.value)} multiline />
        </Typography>
      </DialogContent>
      <DialogActions>
        {sent && (<Typography variant="body1" component="span">Message sent</Typography>)}
        <Button onClick={submit} variant="contained" color="primary">Send</Button>
        <Button onClick={onClose} variant="contained" color="secondary">Cancel</Button>
      </DialogActions>
    </Dialog>
  );
}

const ContactForm = () => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [from, setFrom] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const submit = (e: any) => {
    e && e.preventDefault();
    sendContactForm({ name, from, message }).then(_ => {
      setSent(true);
      window.setTimeout(() => setSent(false), 2000);
    });
    return false;
  }

  return (
    <Section className="no-print">
      <Typography variant="h2" className="no-print">Would you like to get in touch?</Typography>
      <Typography variant="body1" component="form" onSubmit={submit} className={classes.contactForm}>
        <TextField className={classes.bottomMargin} fullWidth variant="outlined" size="small" name="name" placeholder="Your name" value={name} onChange={(e: any) => setName(e.target.value)} />
        <TextField className={classes.bottomMargin} fullWidth variant="outlined" size="small" name="from" placeholder="Your e-mail address" value={from} onChange={(e: any) => setFrom(e.target.value)} />
        <TextField className={classes.bottomMargin} fullWidth variant="outlined" size="small" name="message" placeholder="Message" rows={5} value={message} onChange={(e: any) => setMessage(e.target.value)} multiline />
        <Typography component="div" align="right">
          {sent && (<span>Message sent</span>)}
          <Button type="submit" variant="contained" color="primary">Send</Button>
        </Typography>
      </Typography>
    </Section>
  );
}

const useContactForm = () => {
  const [open, setOpen] = useState(false);
  const show = () => setOpen(true);
  const hide = () => setOpen(false);
  const toggle = () => setOpen(!open);

  return {
    show,
    hide,
    toggle,
    open
  }
}

export {
  ContactForm,
  ContactFormDialog,
  useContactForm
};