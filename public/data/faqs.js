const faqData = [
  {
    question: "What types of clothing do you sell?",
    answer:
      "We specialize in trendy and comfortable apparel for men, women, and children. Our extensive collection includes dresses, tops, bottoms, outerwear (jackets, coats), activewear, loungewear, sleepwear, swimwear, and a wide array of accessories like bags, scarves, hats, and jewelry. We are also proud to offer a growing range of sustainable, organic cotton, and recycled fabric options.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we offer international shipping to over 150 countries worldwide. Shipping costs and delivery times vary significantly by destination, customs regulations, and local postal services. Please review our detailed International Shipping Policy page on our website for specific rates and estimated delivery frames for your region.",
  },
  {
    question: "What are your shipping costs and delivery times?",
    answer:
      "For domestic shipping within Kenya, we offer free standard shipping on all orders over KES 5,000. For orders below this amount, a flat rate of KES 350 applies. Standard domestic delivery typically takes 3-5 business days. For international shipping, costs are dynamically calculated at checkout based on the destination country, package weight, and chosen shipping speed (standard vs. express). International standard delivery generally takes 7-21 business days, while express options can deliver within 3-7 business days. Detailed information is available on our Shipping Policy page.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We want you to be completely satisfied with your purchase. We offer a 30-day return policy for most items, starting from the date you received your order. Items must be unworn, unwashed, undamaged, free of odors (e.g., perfume, smoke), with all original tags attached, and in their original packaging. Final sale items, underwear, and swimwear are non-returnable for hygiene reasons. Please visit our dedicated Returns & Exchanges page on our website for detailed instructions and to initiate a return request.",
  },
  {
    question: "How do I make an exchange?",
    answer:
      "To make an exchange, please follow our standard return process for the item you wish to exchange. Once your return is approved and processed, we will issue a refund or store credit. You can then place a new order for the desired item, size, or color. This ensures you get the exact item you want without delay. Check our Returns & Exchanges page for the complete process.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept a wide range of secure payment methods for your convenience. These include major credit and debit cards (Visa, MasterCard, American Express, Discover), M-Pesa (for Kenyan customers), PayPal, Apple Pay, and Google Pay. All transactions are encrypted and secured for your protection.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order has been processed and shipped, you will receive a shipping confirmation email within 24-48 hours. This email will contain your unique tracking number and a direct link to the courier's website (e.g., DHL, FedEx, G4S). You can use this tracking number on their site to monitor the real-time progress of your delivery. If you created an account, you can also log in and view your order history for tracking details.",
  },
  {
    question: "Do you have a size guide?",
    answer:
      "Absolutely! We understand the importance of a perfect fit. A detailed size guide is available on every single product page, usually located near the size selection dropdown. Our guide provides measurements in both centimeters and inches for busts, waists, hips, and inseams. We recommend comparing your own body measurements to our guide for the best fit. If you're still unsure, don't hesitate to reach out to our customer support team for personalized advice.",
  },
  {
    question: "How do I care for my ShopTure clothing?",
    answer:
      "To ensure the longevity and beauty of your garments, specific care instructions are printed on the label inside each item. Generally, we recommend washing in cold water (or according to label), using a mild detergent, washing with similar colors, and air drying or tumble drying on low heat to preserve fabric quality, color vibrancy, and shape. Avoid harsh detergents, bleach, and high heat drying, which can damage fabrics.",
  },
  {
    question: "Do you have a physical store?",
    answer:
      "Currently, we operate exclusively as an online-only retailer, which allows us to offer a wider selection and competitive pricing. However, we love connecting with our customers! We frequently participate in various pop-up events, local markets, and fashion shows in Nairobi, Mombasa. Follow our social media channels and subscribe to our newsletter for announcements on upcoming events where you can see our collections in person.",
  },
  {
    question: "How can I contact customer service?",
    answer:
      "Our dedicated customer service team is here to help! Email: You can reach us at support@shopture.com. We aim to respond to all email inquiries within 24-48 business hours. Phone: Call us directly at +254 712 345 678 during our business hours (Monday-Friday, 9 AM - 5 PM EAT, excluding public holidays). Live Chat: Use the chat widget on our website for real-time assistance during business hours. Contact Form: Fill out the contact form available on our 'Contact Us' page.",
  },
  {
    question: "Do you offer gift cards?",
    answer:
      "Yes, we do! Our digital gift cards are the perfect present for any fashion enthusiast. They are available for purchase directly on our website in various denominations. Gift cards are delivered instantly via email to the recipient's inbox and can be easily redeemed at checkout. They never expire!",
  },
  {
    question: "Are your clothes ethically sourced and sustainable?",
    answer:
      "We are deeply committed to ethical sourcing, fair labor practices, and increasing sustainability in our supply chain. We carefully select our manufacturing partners who adhere to international labor standards, ensuring fair wages, safe working conditions, and no child labor. We are also continuously expanding our collection of garments made from sustainable materials such as organic cotton, recycled polyester, Tencel, and linen. Look for the 'Sustainable Choice' badge on our product pages for these items. More detailed information about our sustainability initiatives can be found on our 'About Us' or 'Sustainability' page.",
  },
  {
    question: "Can I modify or cancel my order after placing it?",
    answer:
      "We pride ourselves on fast order processing to get your items to you quickly. Because of this, modifications or cancellations may not always be possible once an order has been confirmed. If you need to make changes, please contact our customer service team immediately via phone or live chat after placing your order. We will do our best to accommodate your request before it enters the shipping phase.",
  },
  {
    question: "Do you offer discounts for bulk or wholesale orders?",
    answer:
      "Yes, we welcome partnerships for bulk or wholesale orders! If you are a retailer, business, or organization interested in purchasing a large quantity of our clothing, please contact our dedicated sales team. You can reach them at sales@shopture.com with your specific requirements, and they will provide you with a custom quote and discuss potential volume discounts.",
  },
  {
    question: "How often do you release new collections or products?",
    answer:
      "We are passionate about staying on top of the latest fashion trends! We typically release new arrivals and capsule collections on a weekly or bi-weekly basis. Our main seasonal collections (Spring/Summer, Fall/Winter) are launched quarterly. Subscribe to our newsletter and follow us on social media to be the first to know about our exciting new drops!",
  },
  {
    question: "Do you have a loyalty program or rewards for frequent shoppers?",
    answer:
      "Yes, we value our loyal customers! We offer a fantastic [Your Company Name] Rewards Program. You earn points for every purchase, which can then be redeemed for discounts on future orders. Members also receive exclusive early access to sales, birthday treats, and special promotions. You can sign up for free on our website's 'Rewards Program' page.",
  },
  {
    question: "What if an item I want is out of stock?",
    answer:
      "If an item you love is currently out of stock, you might see an option on the product page to 'Notify Me When Back in Stock.' Enter your email address, and we'll send you an automatic alert as soon as it's available again. For popular items, we often restock quickly. For limited edition pieces, they might not be restocked. You can also contact customer service to inquire about potential restock dates.",
  },
  {
    question: "Can I use multiple discount codes on one order?",
    answer:
      "Generally, only one discount code can be applied per order at checkout. This includes promotional codes, loyalty rewards, or free shipping codes (unless otherwise specified). Our system will automatically apply the best available discount for your order if multiple are entered, but only one will be active.",
  },
  {
    question: "How do I apply a discount code?",
    answer:
      "To apply a discount code, proceed to your shopping cart and then to the checkout page. You will typically find a field labeled 'Discount Code,' 'Promo Code,' or 'Gift Card' on the right-hand side (on desktop) or in a dropdown menu (on mobile). Enter your code exactly as it appears (case-sensitive) and click 'Apply.' Your total will update to reflect the discount.",
  },
  {
    question: "What should I do if my payment failed?",
    answer:
      "If your payment failed, first, please double-check that all your card details (card number, expiry date, CVV, billing address) were entered correctly. Ensure you have sufficient funds or credit limit. Sometimes, banks may flag transactions for security; contact your bank if issues persist. You can also try using an alternative payment method. If you're still experiencing problems, please contact our customer service, and we'll be happy to assist.",
  },
  {
    question: "Do you offer personal styling advice?",
    answer:
      "While we don't currently offer one-on-one personal styling services, we provide lots of inspiration! Check out our blog for styling tips, trend reports, and outfit ideas. Follow us on social media where we share daily style inspiration. Our size guide and product descriptions also aim to help you make informed styling choices.",
  },
  {
    question: "How do I create an account?",
    answer:
      "Creating an account is quick and easy! Click on the 'Account' or 'Sign Up' icon (often a silhouette of a person) in the top right corner of our website. You'll be prompted to enter your email address and create a password. Having an account allows you to track orders, save your shipping details, view order history, and manage your wish list.",
  },
  {
    question: "What if I forgot my password?",
    answer:
      "If you forgot your password, don't worry! Go to the 'Account Login' page and click on the 'Forgot Password?' link. Enter the email address associated with your account, and we'll send you a link to reset your password. Please check your spam folder if you don't receive it within a few minutes.",
  },
  {
    question: "Are your clothes suitable for sensitive skin?",
    answer:
      "We offer a range of garments made from natural fibers like organic cotton, linen, and bamboo, which are generally well-tolerated by sensitive skin. We also ensure our dyes meet industry safety standards. Look for product descriptions that highlight hypoallergenic or natural fabric compositions. If you have severe sensitivities, we recommend checking the fabric composition on the product page before purchasing.",
  },
  {
    question: "How do I subscribe to your newsletter?",
    answer:
      "You can subscribe to our newsletter by entering your email address in the subscription box located in the footer of our website. You'll also typically be prompted with a pop-up on your first visit. Subscribing ensures you receive updates on new arrivals, exclusive discounts, sales events, and styling tips directly in your inbox!",
  },
  {
    question: "How do I unsubscribe from your newsletter?",
    answer:
      "We'd be sad to see you go, but you can easily unsubscribe at any time. Simply click the 'Unsubscribe' link located at the very bottom of any newsletter email you've received from us. Your email will be removed from our mailing list shortly thereafter.",
  },
  {
    question: "What are your holiday shipping deadlines?",
    answer:
      "During peak holiday seasons (like Christmas, Black Friday, etc.), we will publish specific holiday shipping deadlines on our website's homepage, shipping policy page, and through our newsletter. To ensure your gifts arrive on time, we highly recommend ordering well in advance of these deadlines, especially for international deliveries",
  },
  {
    question: "What if I missed my delivery?",
    answer:
      "If you missed your delivery, our courier will attempt one more delivery the next business day. You may also contact them to reschedule.",
  },
  {
    question: "Can I order through WhatsApp?",
    answer:
      "Yes, you can place orders via WhatsApp by messaging us at +254 712 987654.",
  },
  {
    question: "Do you have live chat support?",
    answer:
      "Yes, we offer live chat support on our website from 9:00 AM to 6:00 PM, Monday to Saturday.",
  },
  {
    question: "Can I view my order history?",
    answer:
      "Yes, once you log into your account, go to “My Orders” to see your order history and status.",
  },
  {
    question: "Do you offer maternity wear?",
    answer:
      "Yes, we have a wide selection of comfortable and stylish maternity wear.",
  },
  {
    question: "Do you sell swimwear?",
    answer:
      "Yes, we offer a range of swimwear including bikinis, one-pieces, and swim trunks.",
  },
  {
    question: "Are your materials eco-friendly?",
    answer:
      "Many of our products are made using sustainable materials such as organic cotton and recycled polyester. Look for the “eco-friendly” tag on the product.",
  },
  {
    question: "Can I filter clothes by season?",
    answer:
      "Yes, you can use our filters to browse seasonal collections such as Summer, Winter, Fall, or Rainy Season wear.",
  },
  {
    question: "What is smart casual clothing?",
    answer:
      "Smart casual is a dress code that blends well-fitted, polished business wear with elements of casual attire.",
  },
  {
    question: "What is the difference between slim fit and regular fit?",
    answer:
      "Slim fit clothing is more tailored to the body, while regular fit offers a looser, more relaxed cut.",
  },
  {
    question: "Can I pre-order upcoming collections?",
    answer:
      "Yes, for select items, we offer pre-orders. You’ll be notified of the estimated delivery date at checkout.",
  },
  {
    question: "What if I receive the wrong item?",
    answer:
      "If you receive an incorrect item, please contact our support team within 48 hours to arrange for a replacement or refund.",
  },
  {
    question: "Do you offer outfit recommendations?",
    answer:
      "Yes! Visit our blog or Instagram page for style guides and outfit pairings.",
  },
  {
    question: "Can I shop using a mobile app?",
    answer:
      "Our mobile app is coming soon! For now, our website is fully mobile-optimized for a smooth experience.",
  },
  {
    question: "Do you have a store app?",
    answer:
      "Our mobile shopping app for Android and iOS will launch soon. Stay tuned via our newsletter.",
  },
  {
    question: "What are the washing instructions for wool?",
    answer:
      "Wool garments should be hand washed in cold water or dry cleaned. Avoid wringing and lay flat to dry.",
  },
  {
    question: "Do you have sales for first-time customers?",
    answer:
      "Yes, first-time customers receive a 15% discount. Use the code WELCOME15 at checkout.",
  },
  {
    question: "Can I pay in installments?",
    answer:
      "Yes, we offer flexible payment options through Lipa Later. Select it at checkout.",
  },
  {
    question: "Is there a limit on the number of items I can order?",
    answer:
      "There is no limit on regular orders. For bulk or corporate purchases, contact us for special arrangements.",
  },
  {
    question: "What are your Black Friday deals?",
    answer:
      "Our Black Friday deals include up to 70% off select items. The sale begins the last Friday of November each year.",
  },
  {
    question: "Do you have fashion accessories?",
    answer:
      "Yes, we sell accessories such as belts, scarves, hats, handbags, jewelry, and sunglasses.",
  },
  {
    question: "What is the best way to store clothes?",
    answer:
      "Store clothes in a cool, dry place. Use padded hangers for delicate items and avoid direct sunlight.",
  },
  {
    question: "Can I receive notifications when new items are added?",
    answer:
      "Yes, sign up for our newsletter or follow us on social media to stay updated on new arrivals.",
  },
  {
    question: "Do you offer gender-neutral clothing?",
    answer: "Yes, we have a unisex collection suitable for all genders.",
  },
  {
    question: "What do I do if the website isn’t loading?",
    answer:
      "Try refreshing the page or clearing your browser cache. If the issue persists, contact our support team.",
  },
  {
    question: "Can I request a specific delivery time?",
    answer:
      "You can leave a delivery note during checkout, and we will try to accommodate your preferred time.",
  },
  {
    question: "Are all your products locally made?",
    answer:
      "We offer a mix of locally manufactured and internationally sourced products, all quality-checked by our team.",
  },
  {
    question: "What’s the difference between cotton and polyester?",
    answer:
      "Cotton is breathable and soft, ideal for comfort. Polyester is durable, moisture-wicking, and wrinkle-resistant.",
  },
  {
    question: "How can I check fabric type before buying?",
    answer:
      "Fabric information is listed under the “Material” section of each product description.",
  },
  {
    question: "Can I order for someone else?",
    answer:
      "Yes, you can enter a different shipping address during checkout to send a gift or order for someone else.",
  },
  {
    question: "Do you include invoices in gift orders?",
    answer:
      "No, gift orders come without invoices. You can choose to receive the invoice via email only.",
  },
  {
    question: "Can I redeem loyalty points during sales?",
    answer:
      "Loyalty points cannot be combined with other discounts or promotions unless specified.",
  },
  {
    question: "Do you have seasonal collections?",
    answer:
      "Yes, we release Spring/Summer and Fall/Winter collections every year.",
  },
  {
    question: "Can I use filters to find specific clothing styles?",
    answer:
      "Yes, you can filter by size, color, brand, material, fit, and style using the filter options on our website.",
  },
  {
    question: "Can I view prices in USD?",
    answer:
      "Currently, prices are listed in Kenyan Shillings (KES). Multi-currency support is in development.",
  },
  {
    question: "Do you ship to PO Boxes?",
    answer:
      "Unfortunately, we do not ship to PO Box addresses. Please use a physical delivery address.",
  },
  {
    question: "How do I unsubscribe from the newsletter?",
    answer:
      "Click “Unsubscribe” at the bottom of any of our emails, or manage preferences in your account settings.",
  },
  {
    question: "Can I become a brand ambassador?",
    answer:
      "Yes, we are always looking for fashion influencers. Email partnerships@fashionhut.co.ke with your profile.",
  },
  {
    question: "How often do you add new items?",
    answer:
      "We add new arrivals weekly, so check our New In section regularly.",
  },
  {
    question: "What do I do if I forget my account password?",
    answer:
      "Click “Forgot Password” on the login page to reset your password via email.",
  },
  {
    question: "What is your most popular clothing category?",
    answer:
      "Our bestsellers include denim jeans, cotton t-shirts, and casual dresses.",
  },
  {
    question: "Can I bundle items for a discount?",
    answer:
      "Yes, we offer bundle deals such as 'Buy 2 Get 1 Free' during promotional periods.",
  },
  {
    question: "Do you restock limited editions?",
    answer:
      "Limited edition items are not usually restocked. We recommend purchasing as soon as they're available.",
  },
  {
    question: "Are your clothes machine-washable?",
    answer:
      "Most of our items are machine-washable. Please refer to the care label for specific instructions.",
  },
  {
    question: "Do you sponsor fashion events?",
    answer:
      "Yes, we occasionally sponsor fashion events and shows. Contact events@fashionhut.co.ke to propose a collaboration.",
  },
  {
    question: "What is the difference between activewear and loungewear?",
    answer:
      "Activewear is designed for workouts and sports, offering flexibility and sweat-wicking features. Loungewear is made for comfort at home, often with relaxed fits and soft fabrics.",
  },
  {
    question: "Can I earn points for referring friends?",
    answer:
      "Yes, our referral program gives you and your friend a discount when they make their first purchase using your referral link.",
  },
  {
    question: "Are your products locally designed?",
    answer:
      "Many of our collections are designed in-house by our Nairobi-based design team, with a focus on African style and culture.",
  },
  {
    question: "Do you sell shoes?",
    answer:
      "Yes, we sell a wide range of footwear for men, women, and children including sneakers, sandals, boots, and formal shoes.",
  },
  {
    question: "Do you stock traditional African clothing?",
    answer:
      "Yes, we offer a curated selection of African-inspired attire including kitenge dresses, dashikis, and Ankara shirts.",
  },
  {
    question: "Can I filter by fabric?",
    answer:
      "Yes, on our website you can filter items by fabric such as cotton, linen, wool, polyester, silk, rayon, and more.",
  },
  {
    question: "What’s the difference between formal and semi-formal?",
    answer:
      "Formal wear is suited for black-tie events or business formals, while semi-formal is more relaxed, such as dress shirts with chinos.",
  },
  {
    question: "Do you offer plus-size African wear?",
    answer:
      "Absolutely! We believe fashion is for everyone, and our African wear range includes sizes up to 5XL.",
  },
  {
    question: "Can I request styling advice?",
    answer:
      "Yes! Our online stylists can help you choose outfits for specific events. Use the “Ask a Stylist” feature on our homepage.",
  },
  {
    question: "What is your most popular men’s item?",
    answer:
      "Our slim-fit Oxford shirt and tapered khaki chinos are consistently among our top-selling men’s items.",
  },
  {
    question: "What’s trending this season for women?",
    answer:
      "This season, wrap dresses, linen co-ords, oversized blazers, and earthy tones are trending.",
  },
  {
    question: "Can I buy an outfit as a gift?",
    answer:
      "Yes, you can mark your order as a gift at checkout and add a custom message. Gift wrapping is available for KES 150.",
  },
  {
    question: "Can I request same-day delivery?",
    answer:
      "Same-day delivery is available in Nairobi for orders placed before 1:00 PM. A fee applies depending on distance.",
  },
  {
    question: "Do you ship to rural areas?",
    answer:
      "Yes, we ship nationwide. Rural deliveries may take slightly longer depending on courier availability.",
  },
  {
    question: "Can I edit my cart after checkout?",
    answer:
      "Once an order is placed, cart changes are not allowed. You must contact support to cancel and reorder.",
  },
  {
    question: "Do you offer Eid or Christmas specials?",
    answer:
      "Yes, we run seasonal promotions during Eid, Christmas, Valentine’s Day, and other major holidays.",
  },
  {
    question: "Can I return underwear or swimwear?",
    answer:
      "For hygiene reasons, underwear and swimwear can only be returned if unopened and unworn with tags intact.",
  },
  {
    question: "How do I know if an item is machine-safe?",
    answer:
      "Each product lists washing instructions. Look for the “Machine Washable” label in the product description.",
  },
  {
    question: "Do you offer limited collections?",
    answer:
      "Yes, we drop exclusive limited collections throughout the year. These often sell out fast, so subscribe to get alerts.",
  },
  {
    question: "Do you sell men’s suits?",
    answer:
      "Yes, we stock both ready-made and tailored-fit suits suitable for weddings, office, and formal events.",
  },
];

export default faqData;
