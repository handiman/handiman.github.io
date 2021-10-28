import React, { useState } from 'react';
import { Typography, Dialog, DialogTitle, DialogActions, DialogContent, TextField, Button, Theme, createStyles, WithStyles, withStyles, FormControl } from '@material-ui/core';
import { SectionProps } from '.';
import { useApi } from '../../Api';

const styles = (theme: Theme) => createStyles({
  root: {
    '& > div': {
      display: 'block',
      marginBottom: theme.spacing(1)
    }
  }
});

interface ContactFormDialogProps extends SectionProps, WithStyles<typeof styles> {
  open: boolean,
  onClose: () => void
}

const ContactFormDialogComponent: React.FC<ContactFormDialogProps> = ({
  open, onClose, title, classes
}) => {
  const { sendContactForm } = useApi();
  const [name, setName] = useState('');
  const [from, setFrom] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [sent, setSent] = useState(false);
  const [_, setSending] = useState(false);
  const submit = async (e: any) => {
    e && e.preventDefault();

    try {
      setError('');
      setSending(true);
      await sendContactForm({ name, from, message });
      setSent(true);
      setSending(false);
      window.setTimeout(() => {
        close();
        setSent(false);
      }, 1500);
    } catch (e) {
      setError(e.message);
      setSending(false);
      setSent(false);
    }

    return false;
  }

  const reset = () => {
    setSending(false);
    setSent(false);
    setName('');
    setFrom('');
    setMessage('');
    setError('');
  }

  const close = () => {
    reset();
    onClose();
  }

  return (
    <Dialog open={open} onClose={close} maxWidth="md" fullWidth>
      {title && <DialogTitle>{title}</DialogTitle>}
      <DialogContent>
        <form onSubmit={submit} className={classes.root}>
          <TextField fullWidth variant="outlined" size="small" name="name" placeholder="Your name" value={name} onChange={(e: any) => setName(e.target.value)} />
          <TextField fullWidth variant="outlined" size="small" name="from" placeholder="Your e-mail address" value={from} onChange={(e: any) => setFrom(e.target.value)} />
          <TextField fullWidth variant="outlined" size="small" name="message" placeholder="Message" rows={5} value={message} onChange={(e: any) => setMessage(e.target.value)} multiline />
        </form>
      </DialogContent>
      <DialogActions>
        {sent && <span>Message sent</span>}
        {error && <div>{error}</div>}
        <Button onClick={submit} variant="contained" color="primary">Send</Button>
        <Button onClick={onClose} variant="contained" color="secondary">Cancel</Button>
      </DialogActions>
    </Dialog>
  );
}

interface ContactFormProps extends SectionProps, WithStyles<typeof styles> { }

const ContactFormComponent: React.FC<ContactFormProps> = ({ title, classes }) => {
  const { sendContactForm } = useApi();
  const [name, setName] = useState('');
  const [from, setFrom] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const [_, setSending] = useState(false);
  const submit = async (e: any) => {
    e && e.preventDefault();

    try {
      setError('');
      setSending(true);
      await sendContactForm({ name, from, message });
      setSending(false);
      setSent(true);
      window.setTimeout(reset, 2000);
    } catch (e) {
      setError(e.message);
      setSending(false);
      setSent(false);
    }
    return false;
  }

  const reset = () => {
    setSending(false);
    setSent(false);
    setName('');
    setFrom('');
    setMessage('');
    setError('');
  }

  return (
    <form onSubmit={submit} className={classes.root}>
      {title && <Typography variant="h4" gutterBottom>{title}</Typography>}
      <TextField variant="outlined" size="small" name="name" placeholder="Your name" value={name} onChange={(e: any) => setName(e.target.value)} />
      <TextField variant="outlined" size="small" name="from" placeholder="Your e-mail address" value={from} onChange={(e: any) => setFrom(e.target.value)} />
      <TextField variant="outlined" size="small" name="message" placeholder="Message" rows={5} value={message} onChange={(e: any) => setMessage(e.target.value)} multiline />
      <FormControl>
        <div className="MuiInputBase-root">
          <Button type="submit" variant="contained" color="primary">Send</Button>
        </div>
      </FormControl>
      {sent && <div>Message sent</div>}
      {error && <div>{error}</div>}
    </form>
  );
}

export const ContactForm = withStyles(styles)(ContactFormComponent);
export const ContactFormDialog = withStyles(styles)(ContactFormDialogComponent);