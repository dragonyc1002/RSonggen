import React from 'react';
import avatar_FengRuanBus from './asset/FengRuanBus.png';
import avatar_HeXinBus from './asset/Hexinbus.png';
import {
  DiscordMessages,
  DiscordMessage,
  DiscordAttachment,
  DiscordMention
} from "@skyra/discord-components-react";

const avatar = {
  FengRuanBus: avatar_FengRuanBus,
  HeXinBus: avatar_HeXinBus
}

export default function Renderer(props) {
  return (
    <DiscordMessages style={{ minHeight: '90px' }} light-theme={props.light} id="renderer">
      <DiscordMessage
        author={props.name}
        avatar={avatar[props.avatar]}
        roleColor={props.color}
        timestamp={props.timestamp}
      >
        {""}
        {props.content}
        <div>
        {
        /\.(bmp|jpe?g|png|gif|webp|tiff)$/i.test(props.attachment) ?
          <DiscordAttachment
            slot="attachments"
            url={props.attachment}
            style={{ maxWidth: '256px' }}
            alt="attachment"
          /> : ""
        }
        </div>
      </DiscordMessage>
    </DiscordMessages>
  );
}
