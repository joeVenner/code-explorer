import { types } from "@cosmwasm/sdk";
import React, { Fragment } from "react";

import { AccountLink } from "../../../components/AccountLink";
import { printableBalance } from "../../../ui-utils";

interface Props {
  readonly msg: types.MsgSend;
}

export function MsgSend({ msg }: Props): JSX.Element {
  return (
    <Fragment>
      <li className="list-group-item">
        Sender: <AccountLink address={msg.value.from_address} maxLength={null} />
      </li>
      <li className="list-group-item">
        Recipient: <AccountLink address={msg.value.to_address} maxLength={null} />
      </li>
      <li className="list-group-item">Amount: {printableBalance(msg.value.amount)}</li>
    </Fragment>
  );
}
