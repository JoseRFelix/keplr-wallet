import { IChainStore } from "@keplr-wallet/stores";
import { Currency, IBCCurrency } from "@keplr-wallet/types";
import { ObservableQueryAssets } from "./assets";
import { computed, makeObservable } from "mobx";

export class ObservableQueryIbcSwap {
  constructor(
    protected readonly chainStore: IChainStore,
    protected readonly queryAssets: ObservableQueryAssets,
    public readonly swapChainId: string
  ) {
    makeObservable(this);
  }

  isSwappableCurrency(
    chainId: string,
    currency: Currency | IBCCurrency
  ): boolean {
    const chainIdentifier = this.chainStore.getChain(chainId).chainIdentifier;
    return (
      this.swapCurrenciesMap.has(chainIdentifier) &&
      this.swapCurrenciesMap
        .get(chainIdentifier)!
        .has(currency.coinMinimalDenom)
    );
  }

  // Key: chain identifier, inner key: coin minimal denom
  @computed
  get swapCurrenciesMap(): Map<string, Map<string, Currency | IBCCurrency>> {
    const swapChainInfo = this.chainStore.getChain(this.swapChainId);

    const queryAssets = this.queryAssets.getAssets(swapChainInfo.chainId);
    const assets = queryAssets.assets;

    const res = new Map<string, Map<string, Currency | IBCCurrency>>();

    for (const asset of assets) {
      const chainId = asset.chainId;
      const chainIdentifier = this.chainStore.getChain(chainId).chainIdentifier;

      let innerMap = res.get(chainIdentifier);
      if (!innerMap) {
        innerMap = new Map();
        res.set(chainIdentifier, innerMap);
      }

      const currency = this.chainStore
        .getChain(chainId)
        .findCurrency(asset.denom);

      if (currency) {
        // If ibc currency is well known.
        if (
          "originCurrency" in currency &&
          currency.originCurrency &&
          "originChainId" in currency &&
          currency.originChainId
        ) {
          innerMap.set(currency.coinMinimalDenom, currency);
        } else if (!("paths" in currency)) {
          // if currency is not ibc currency
          innerMap.set(currency.coinMinimalDenom, currency);
        }
      }
    }

    return res;
  }
}
