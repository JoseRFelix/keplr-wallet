import { Router } from "@keplr-wallet/router";
import { KeyRingService } from "./service";
import {
  GetKeyRingStatusMsg,
  FinalizeMnemonicKeyCoinTypeMsg,
  NewMnemonicKeyMsg,
  NewLedgerKeyMsg,
  NewPrivateKeyKeyMsg,
  AppendLedgerKeyAppMsg,
  LockKeyRingMsg,
  UnlockKeyRingMsg,
  SelectKeyRingMsg,
  ChangeKeyRingNameMsg,
  DeleteKeyRingMsg,
  ShowSensitiveKeyRingDataMsg,
  ChangeUserPasswordMsg,
} from "./messages";
import { ROUTE } from "./constants";
import { getHandler } from "./handler";

export function init(router: Router, service: KeyRingService): void {
  router.registerMessage(GetKeyRingStatusMsg);
  router.registerMessage(SelectKeyRingMsg);
  router.registerMessage(FinalizeMnemonicKeyCoinTypeMsg);
  router.registerMessage(NewMnemonicKeyMsg);
  router.registerMessage(NewLedgerKeyMsg);
  router.registerMessage(NewPrivateKeyKeyMsg);
  router.registerMessage(AppendLedgerKeyAppMsg);
  router.registerMessage(LockKeyRingMsg);
  router.registerMessage(UnlockKeyRingMsg);
  router.registerMessage(ChangeKeyRingNameMsg);
  router.registerMessage(DeleteKeyRingMsg);
  router.registerMessage(ShowSensitiveKeyRingDataMsg);
  router.registerMessage(ChangeUserPasswordMsg);

  router.addHandler(ROUTE, getHandler(service));
}
