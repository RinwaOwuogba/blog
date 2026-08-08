---
title: 'From Traditional Exchanges to AMMs: A Shift in Liquidity Management'
description: 'How automated market makers replaced traditional order-book exchanges, using liquidity pools and the x*y=k formula to keep on-chain trades liquid.'
pubDate: 'May 27 2023'
heroImage: '../../assets/cover-amms.jpg'
---

## 1. Introduction

Today, my friends, we're diving into the mind-boggling world of Automatic Market Makers, or as the cool kids say, AMMs. Now, you might be scratching your head, going, "What the hell is all this about?" Well, hold onto your seats because we're about to demystify the whole damn thing!

In the simplest terms, AMMs are like your friendly neighbourhood shopkeepers, but for the cryptocurrency world. They're always there, waiting with open arms, ready to trade any combination of assets at any time of the day (or night). They don't judge or discriminate - whether you want to swap Ether for DAI, BAT for USDT, or any other trade you can dream up, they're there to help make it happen.

But how do they do it? Well, they utilize a mathematical formula to automatically determine the price of trades. No haggling, no lengthy negotiations, just quick and straightforward transactions. Sweet, right?

So where do AMMs fit in the grand scheme of things, you might ask? AMMs are dead centre in the world of decentralized exchanges, they've brought a revolutionary change to asset trading.

Before AMMs, trading could be a bit of a drag. You needed a buyer for every seller, a matching pair for every trade. Now, with AMMs, that's a thing of the past. They act as a constant party on the other side of the trade, providing liquidity and enabling trades to happen smoothly. Think of them as the fuel that keeps the DeFi engine running!

But don't worry, we'll dive deeper into all these topics in the coming sections. Ready?

## 2. The Problem with Traditional Exchanges

Let's imagine you're in a bustling marketplace. The air is filled with the noise of people haggling, cash registers ringing, goods exchanging hands - it's a vivid picture of supply meeting demand. This is what traditional exchanges are like. They operate on an order book model, where buyers and sellers list their desired prices and quantities. When a buyer's price matches a seller's, voila, a trade occurs!

Allow me to illustrate:

*In a bustling marketplace, imagine you're a vendor with apples priced at $1 each, while a buyer is bidding $0.90 per apple. The mismatch, known as the 'spread', prevents a trade. However, a new buyer enters, willing to match your $1 ask price, and the trade occurs. This scenario epitomizes traditional exchanges operating on an order book model, where trades are based on matching a buyer's bid price with a seller's ask price, creating the dynamic and lively environment of the marketplace or financial exchange.*

While this system has been serving us pretty well for quite a while, it does have its quirks and hitches. Centralized exchanges such as Binance, Coinbase, KuCoin and so on, for example, have often been likened to traditional banks. They act as middlemen, holding users' assets and managing trades. This centralized model, however, has several drawbacks. It's vulnerable to hacks and other security issues. It can also be a bottleneck during peak trading times, slowing down transactions and affecting the overall user experience.

On the other hand, decentralized exchanges (DEXs) eliminate the middleman, allowing peer-to-peer trades using smart contracts. This gives users more control over their assets and enhances privacy. But traditional DEXs also face challenges. Liquidity can be a major issue, especially for less popular tokens. If there's not enough interest on both sides of a trade, it could be tough to get your transactions through.

Here's where AMMs come in. Remember our marketplace analogy? Well, imagine now a marketplace that never sleeps, where you always find a willing buyer or seller, regardless of how rare or popular your goods are. Sounds amazing, right? This is the kind of environment AMMs create.

AMMs turn the concept of an order book on its head. They do this in two ways:

1. Instead of waiting for a buyer's price to match a seller's, they use a pre-set formula to determine the price of a trade, no matter when you want to make it. You could think of AMMs as vending machines. They always have a set price for their goods, ready to trade anytime, any day!
2. AMMs allow anyone to become a liquidity provider by depositing assets into a pool. In return, these liquidity providers earn transaction fees, incentivizing more people to contribute and, thereby, solving the liquidity problem we often see in traditional DEXs.

To sum it up, AMMs address the limitations of traditional exchanges by offering constant liquidity and enabling peer-to-peer trades without the need for an order book.

## 3. Understanding Liquidity Pools

Imagine a big, community chest where people throw in their spare coins. It's always available, and you can take coins out whenever you want, as long as you replace them with something of equal value. This, my friends, is a liquidity pool in a nutshell - a shared pot of tokens that powers an AMM.

Here's how it works. In an AMM, you're not directly trading with another person. Instead, you're trading with a smart contract, a piece of code that runs on a blockchain network (like Ethereum). This contract, powered by the liquidity pool, will always take your trade, no matter the hour or the demand.

The size and composition of this pool matter a lot. A larger pool means more liquidity, which in turn means you can make bigger trades without significantly affecting the price. In the world of DeFi, we love this thing called 'slippage' as much as a cat loves taking a bath. Slippage refers to the difference between the expected price of a trade and the price at which it actually executes. More liquidity equals less slippage and less slippage equals happier traders!

Now, where does this pool come from? Well, that's where our unsung heroes - the Liquidity Providers (LPs) - step in. LPs are regular folks like you and me who deposit their tokens into these pools. In essence, they're saying, "Here you go, AMM! Use my tokens to facilitate trades."

But why would anyone want to lend their precious tokens to a smart contract? What's in it for them? Well, by becoming LPs, people can earn passive income in the form of transaction fees. Every time someone makes a trade, a tiny fraction of it is taken as a fee, which then gets distributed among the LPs. It's like a reward for keeping the DeFi machine well-oiled and running.

However, providing liquidity isn't all sunshine and rainbows. It comes with its own set of risks, such as impermanent loss, price slippage, and so on.

## 4. The Constant Product Market Maker Model

Remember AMMs use a mathematical formula to automatically determine the price of trades? While there are variations of this formula, the constant thing is they make sure the total assets locked for trading remain constant.

This group of functions are referred to as constant function market makers (CFMMs), examples include: Constant Product Market Maker (CPMM), Constant Sum Market Maker (CSMM), Constant Mean Market Maker (CMMM).

Now, onto one of the most widely used mechanisms - the Constant Product Market Maker Model (CPMM).

So what's this fancy term, you ask? It's simpler than it sounds.

Imagine a seesaw, perfectly balanced. As one side goes up, the other side goes down. That's basically what the constant product formula does, but with token prices instead of kids on a playground.

Let's break it down. The Constant Product Market Maker Model is based on a simple formula: `x*y=k`, where `x` and `y` represent the quantities of the two tokens in the liquidity pool, and `k` is a constant value. This constant, `k`, in theory at least, must always remain the same – hence the term "constant product". In practice, however, deviations can occur due to the dynamics of trading. These small variations in k are considered acceptable as long as they remain within an acceptable range and do not significantly impact the market's liquidity or stability.

Sounds a bit abstract, right? Don't worry! Let's break it down with a concrete example.

*Let's say we have a liquidity pool with 100 ETH and 2000 DAI. Applying our formula,* `k` *would be* `100*2000 = 200,000`*. This means that no matter how our token quantities change through trades, their product should always equal* `200,000`.

*So, if someone comes along and buys 1 ETH for 20 DAI, our pool would have 99 ETH and 2020 DAI. If we do the math,* `99*2020 = 199,980`*, which is close to our* `k`*, but not exactly equal. The difference here, my friends, is due to something we call "slippage", which we've touched on earlier.*

This model is great for keeping our AMM fair and balanced, but it does influence the price of tokens. How, you might ask? Well, the price in this model is essentially determined by the ratio of the tokens in the pool. If we go back to our previous example, initially, the price of 1 ETH is 20 DAI (2000 DAI/100 ETH = 20 DAI/ETH). But after that trade, the price becomes 20.40 DAI (2020 DAI/99 ETH = 20.40 DAI/ETH). So, you see, the act of buying ETH with DAI raised the price of ETH.

Here's a simple way to remember how this works:

- When the amount of a token in a pool decreases (because it's being bought), its price goes up.
- Conversely, when the amount of a token in a pool increases (because it's being sold), its price goes down.

With all these moving parts, it might seem like there's a lot going on. But here's a summary to help you keep track:

1. The Constant Product Market Maker Model is based on the formula `x*y=k`.
2. The quantities of tokens in the liquidity pool can change, but their product (`k`) always stays the same.
3. The price of tokens is determined by their ratio in the pool.

Whew! That was a bit of a marathon, wasn't it? But guess what? You've now got a solid understanding of how the Constant Product Market Maker Model works and how it determines the price of tokens in a liquidity pool.

## 5. Popular AMMs: Uniswap, Balancer, and Curve

It's time to explore some of the most popular Automatic Market Makers (AMMs) in the DeFi landscape. While several decentralized exchanges employ AMMs, these three platforms are sufficiently differentiated in their approach to handling AMMs. Let's jump right in!

### Uniswap: The Trailblazer

Uniswap is undoubtedly the pioneer of AMMs, capturing the hearts and minds of DeFi enthusiasts worldwide. Launched in 2018, it introduced the concept of liquidity pools powered by smart contracts on the Ethereum blockchain. What sets Uniswap apart is its simple yet powerful approach:

- **Permissionless and Trustless**: Anyone can participate in Uniswap without any intermediaries. No need for registration, KYC, or waiting for approvals. It's a truly open and permissionless platform.
- **Constant Product Market Maker**: Uniswap employs the Constant Product Market Maker Model we discussed earlier, enabling users to trade ERC-20 tokens directly from their wallets. The platform uses a deterministic algorithm to calculate token prices, ensuring fair and transparent trades.
- **Liquidity Provider Incentives**: Uniswap incentivizes liquidity providers by offering them a share of the trading fees generated by the platform. By staking their tokens in a liquidity pool, users can earn a portion of the trading fees proportional to their contribution.

Uniswap's simplicity and user-friendly interface have made it the go-to choice for many traders and liquidity providers, contributing to its immense popularity and liquidity depth.

### Balancer: The Power of Customization

Next up, we have Balancer, an AMM that takes the concept of liquidity pools to a whole new level. Balancer introduces a unique feature: the ability to create customizable pools with multiple tokens and varying weights. Here's what makes Balancer stand out:

- **Flexible Pools**: Unlike Uniswap's 50/50 token ratio, Balancer allows users to create pools with different token compositions. For instance, you can set up a pool with 80% DAI, 15% ETH, and 5% MKR. This flexibility opens up a world of possibilities, enabling the creation of pools that cater to specific trading strategies.
- **Smart Order Routing**: Balancer optimizes trading by automatically splitting orders across multiple pools to achieve the best possible price. This feature enhances efficiency and minimizes slippage, providing users with more favourable trading experiences.
- **Balancer Tokens**: Balancer also introduces its native token called BAL. Holders of BAL tokens have governance rights, enabling them to participate in the decision-making process of the platform. These tokens can be earned by providing liquidity to Balancer pools.

With its customizable pools and advanced trading capabilities, Balancer offers a rich trading experience for users seeking greater control over their strategies.

### Curve: The Stablecoin Specialist

Last but not least, we have Curve, an AMM designed specifically for stablecoin trading. As we know, stablecoins play a crucial role in the DeFi ecosystem, providing stability and serving as a reliable medium of exchange. Curve takes this concept to new heights:

- **Low Slippage for Stablecoins**: Curve is optimized for trading stablecoins, ensuring minimal slippage and reduced fees. By focusing on stable assets, Curve provides a reliable and efficient trading experience for users looking to swap between stablecoins.
- **Low Volatility Pools**: Curve utilizes specialized pool strategies, such as the StableSwap algorithm, to maintain low volatility. These strategies aim to keep the peg of stablecoins intact and minimize price fluctuations, resulting in a smoother trading experience.
- **Enhanced Liquidity**: Curve incentivizes liquidity providers with trading fees and CRV tokens, encouraging them to contribute to the platform's liquidity. This ensures ample liquidity for stablecoin trading, enhancing stability and reducing price impact.

Curve's dedication to stablecoin trading has made it a popular choice for users seeking seamless and secure stablecoin swaps.

## 6. Risks and Challenges with Automated Market Makers (AMMs)

While the advent of AMMs has fundamentally revolutionized the DeFi space, it's not without its risks and challenges. Let's take a look at some of these potential pitfalls, particularly impermanent loss, price slippage, and smart contract risk.

**1. Impermanent Loss:**

Impermanent loss can be an unfamiliar concept for those new to the DeFi space, but it's of paramount importance if you're interacting with AMMs. Imagine you're providing liquidity to a pool and the relative price of your tokens changes compared to when you deposited them. The "loss" comes into play when the current price divergence causes your stake in the liquidity pool to be worth less than if you had just held onto the tokens.

*For example, you've contributed 1 ETH and 100 DAI (assuming 1 ETH = 100 DAI) to a liquidity pool. If the price of ETH rises to 200 DAI, the AMM would balance itself, resulting in fewer ETH and more DAI in your pool share. If you decide to withdraw at this point, you end up with less ETH than you initially put in, experiencing what's known as 'impermanent loss'.*

**2. Price Slippage:**

In a nutshell, price slippage refers to the difference between the expected price of a trade and the actual price at which the trade is executed. This phenomenon is particularly prevalent in AMMs due to the algorithmic nature of price determination.

Imagine wanting to trade 10,000 DAI for ETH in a pool. If the pool's liquidity isn't sufficient, the initial DAI you trade, say the first few hundred, will get you a reasonable amount of ETH, per the prevailing market exchange rate. However, as you continue trading more DAI for ETH, the pool's DAI supply increases while its ETH supply decreases. This imbalance causes the pool's DAI/ETH exchange rate to shift against you ('slip' effectively), in accordance with the AMM's pricing algorithm. As a result, for each subsequent DAI you trade, you receive incrementally less ETH.

**3. Smart Contract Risk:**

Smart contracts are the backbone of AMMs and, as such, they carry their share of risk. From potential bugs in the contract code to more malicious exploits, the automatic and immutable nature of smart contracts can pose a significant threat.

The infamous DAO Hack in 2016 was due to a smart contract vulnerability where recursive calls were exploited, leading to a loss of around $60M worth of Ether.

### Mitigating AMM Risks

As intimidating as these risks may seem, the DeFi community is constantly innovating and developing strategies to counteract these issues.

**1. Impermanent Loss & Price Slippage::**

New iterations on the initial AMM models are emerging, models such as:

- Hybrid Automated Market Makers (HAMM)
- Dynamic Automated Market Makers (DAMM)
- Virtual Automated Market Makers (VAMM)
- Proactive Market Makers (PMM)
- Replicating Market Maker (RMM)

These new models apply different mechanisms such as reducing price impact, distributing liquidity better, and proactively moving the price curve in an attempt to combat impermanent loss and price slippage

Feel free to explore.

**2. Managing Smart Contract Risk:**

Smart contract risk is mitigated by robust testing, formal verification, and audits by reputable security firms. On top of this, some platforms are integrating insurance or bug bounty programs into their protocol to provide an additional layer of protection.

## 7. Conclusion

We've navigated quite a journey through the world of Automated Market Makers, haven't we? In our expedition, we explored several facets of AMMs, from their foundational principles to their influential role in the DeFi space. Let's revisit the key takeaways to solidify our newfound knowledge.

- *AMMs are Game Changers:* AMMs have introduced a revolutionary shift in how asset exchange works. By eliminating the need for order books and enabling seamless token swaps, they've undeniably made the DeFi space more accessible and efficient.
- *The Power of Liquidity Pools:* At the heart of every AMM, we find liquidity pools. These are fueled by liquidity providers who deposit pairs of tokens and earn trading fees in return, creating a self-sustaining ecosystem of decentralized exchanges.
- *Modelling the Market:* We delved into the Constant Product Market Maker Model, the mathematical magic behind price determination in a liquidity pool. The elegant simplicity of this model is a key reason for its widespread adoption.
- *Variety of AMMs:* We acquainted ourselves with notable AMMs like Uniswap, Balancer, and Curve. Each one brings something unique to the table, making the DeFi landscape more robust and diverse.
- *Risk and Reward:* Like all financial systems, AMMs come with their share of risks. Impermanent loss, price slippage, and smart contract risk are significant hurdles. However, innovators in the space continue to develop solutions to these challenges.

So, what lies ahead for AMMs and the broader DeFi landscape? Well, the potential is staggering. AMMs have just begun to scratch the surface of the possible disruptions in the financial world. They've already created a paradigm shift in how we trade and exchange assets, democratizing the process and making it more accessible to the masses.

However, as we peer into the future, the potential implications of AMMs extend beyond just trading. As the underlying technology evolves, we may see AMMs integrated into more complex financial instruments or operations. Imagine a world where complex derivatives or loans are handled completely by smart contracts and AMMs. The possibilities are truly endless.

In the grand scheme of things, we're still in the early stages of this exciting journey. As we continue to advance and innovate, AMMs will undoubtedly play a pivotal role in shaping the DeFi landscape and possibly the future of finance as we know it.

So, strap in and hold on tight. The future is looking mighty exciting, my friends, and I can't wait to continue learning, exploring, and sharing this journey with you all. Till our next exploration, stay curious and keep learning!
