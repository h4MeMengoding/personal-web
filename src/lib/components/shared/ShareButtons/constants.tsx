import { FaFacebook, FaLink, FaTelegram, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export const socialMap = (obj: { title?: string; url: string }) => {
  const title = obj.title ? `${obj.title}: ` : '';
  const whatsappText = `${title}${obj.url}`;
  return [
    {
      name: 'facebook',
      icon: <FaFacebook />,
      baseSocialUrl: 'https://www.facebook.com/sharer/sharer.php',
      params: {
        u: obj.url,
        quote: obj.title,
      },
    },
    {
      name: 'x-twitter',
      icon: <FaXTwitter />,
      baseSocialUrl: 'https://x.com/intent/tweet',
      params: {
        url: obj.url,
        text: obj.title,
        via: 'sozonome',
      },
    },
    {
      name: 'telegram',
      icon: <FaTelegram />,
      baseSocialUrl: 'https://telegram.me/share/url',
      params: {
        url: obj.url,
        text: obj.title,
      },
    },
    {
      name: 'whatsapp',
      icon: <FaWhatsapp />,
      baseSocialUrl: 'https://api.whatsapp.com/send',
      params: {
        text: whatsappText,
      },
    },
    {
      name: 'copy URL',
      icon: <FaLink />,
      baseSocialUrl: obj.url,
      params: {},
      isCopy: true,
    },
  ];
};
