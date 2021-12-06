import React,{Component} from "react";
import ReactDOM from 'react-dom';
import {
  EmailShareButton,
  FacebookShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton
} from "react-share";
import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  HatenaIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  LivejournalIcon,
  MailruIcon,
  OKIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  ViberIcon,
  VKIcon,
  WeiboIcon,
  WhatsappIcon,
  WorkplaceIcon
} from "react-share";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import styles from '../styles/socialShare.module.scss'

function socialShareButton(props)
{
  const mysurl='192.168.101.7:3000/';
  const newURL = mysurl+props.mylink;
  return(
    <div className={styles.socialShare}>
      <div className={styles.container}>

        <div className={styles.url}>
            <CopyToClipboard text={newURL} >
              <h5 >{newURL}</h5>
            </CopyToClipboard>
        </div>
        
        <div className={styles.socialShareIcons}>
          <span >
              <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" className="bi bi-clipboard" viewBox="0 0 16 16" style={{backgroundColor:'blue',borderRadius:'50%',padding:'8px'}}>
              <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
              <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
            </svg>
          </span>

          <span>
              <WhatsappShareButton url={mysurl} title='it a sample Quote' >
                <WhatsappIcon size={50} round={true} />
              </WhatsappShareButton>
          </span>

          <span>
              <FacebookShareButton url={mysurl} quote='it a sample Quote' >
                <FacebookIcon size={50} round={true} />
              </FacebookShareButton>
          </span>
          
          <span>
              <TelegramShareButton url={mysurl} quote='it a sample Quote' >
                <TelegramIcon size={50} round={true} />
              </TelegramShareButton>
          </span>

          <span>
            <TwitterShareButton title='it a sample Quote' hashtag='#try'>
                <TwitterIcon size={50} round={true}/>
            </TwitterShareButton>
          </span>

          <span>
            <EmailShareButton subject='lorem ipsum'  >
                <EmailIcon size={50} round={true}/>
            </EmailShareButton>
          </span>

          <span>
            <LinkedinShareButton >
                <LinkedinIcon size={50} round={true}/>
            </LinkedinShareButton>
          </span>

        </div>
      </div>
        

    </div>
  )
}

export default socialShareButton;