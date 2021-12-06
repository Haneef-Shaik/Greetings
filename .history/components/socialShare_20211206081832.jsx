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
          <img src="https://img.icons8.com/pastel-glyph/50/000000/copy--v2.png"/>
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