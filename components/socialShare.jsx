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
  const mysurl='greetings-lovat.vercel.app';
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
          <div style={{backgroundColor:'#aaaf',borderRadius: '50%',display:'inline-block',height: '50px',width: '50px',padding:'6px  2px 2px 0px'}}>
          <img src="https://img.icons8.com/pastel-glyph/35/000000/copy--v2.png"/>
          </div>

          <span>
              <WhatsappShareButton url={newURL} title='Hey! Check it out ' >
                <WhatsappIcon size={50} round={true} />
              </WhatsappShareButton>
          </span>

          <span>
              <FacebookShareButton url={newURL} quote='Hey! Check it out ' >
                <FacebookIcon size={50} round={true} />
              </FacebookShareButton>
          </span>
          
          <span>
              <TelegramShareButton url={newURL} quote='Hey! Check it out ' >
                <TelegramIcon size={50} round={true} />
              </TelegramShareButton>
          </span>

          <span>
            <EmailShareButton subject=`Hey! Check it out - {newURL} `  >
                <EmailIcon size={50} round={true}/>
            </EmailShareButton>
          </span>

        </div>
      </div>
        

    </div>
  )
}

export default socialShareButton;
