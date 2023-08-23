import { IAmountConfig } from "@keplr-wallet/hooks";
import { CoinPretty, RatePretty } from "@keplr-wallet/unit";
import { AppCurrency } from "@keplr-wallet/types";

export interface IIBCSwapAmountConfig extends IAmountConfig {
  outChainId: string;
  outCurrency: AppCurrency;
  outAmount: CoinPretty;
  slippageOutOverIn: RatePretty;
  spotPriceOutOverIn: CoinPretty;
  effectivePriceOutOverIn: CoinPretty;

  isFetching: boolean;
  refresh(): Promise<void>;
}
