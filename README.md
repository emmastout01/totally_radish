# Totally Radish

New to being a vegan? Dazed and confused starting at incomprehendible lists of ingredients for products? Totally radish allows you to quickly make sure a product you are eating/buying is 100% vegan-friendly! Just take a photo or upload an existing photo to the app and it'll do the hard work for you.

## Built With

- AngularJS
- Express
- Node.js
- PostgreSQL
- Bootstrap
- Passport
- NutritionIX API
- OCR API

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Install the following on your computer to run this app.

- [Node.js](https://nodejs.org/en/)
- Postgresql


### Installing


```sql
CREATE TABLE "users" (
  "id" serial primary key,
  "username" varchar(80) not null UNIQUE,
  "password" varchar(240) not null
);

create table "vegan" (
  "ingredient" varchar(255),
  "description" text
);

create table stringParse(
  ingredient varchar(255)
); 

Insert into vegan (ingredient, description) values (UPPER('Adrenaline'), 'Hormone from adrenal glands of hogs, cattle, and sheep. In medicine. Alternatives: synthetics.'),
(UPPER('Alanine'), ' See Amino Acids. '),
(UPPER('Albumen'), 'In eggs, milk, muscles, blood, and many vegetable tissues and fluids. In cosmetics, albumen is usually derived from egg whites and used as a coagulating agent. May cause allergic reaction. In cakes, cookies, candies, etc. Egg whites sometimes used in “clearing” wines. Derivative: Albumin.'),
(UPPER('Albumin'), ' See Albumen. '),
(UPPER('Alcloxa'), ' See Allantoin. '),
(UPPER('Aldioxa'), ' See Allantoin. '),
(UPPER('Aliphatic Alcohol'), ' See Lanolin and Vitamin A. '),
(UPPER('Allantoin'), 'Uric acid from cows, most mammals. Also in many plants  especially comfrey . In cosmetics  especially creams and lotions  and used in treatment of wounds and ulcers. Derivatives: Alcloxa, Aldioxa. Alternatives: extract of comfrey root, synthetics.'),
(UPPER('Alligator Skin'), ' See Leather. '),
(UPPER('Alpha-Hydroxy Acids'), 'Any one of several acids used as an exfoliant and in anti-wrinkle products. Lactic acid may be animal-derived  see Lactic Acid . Alternatives: glycolic acid, citric acid, and salicylic acid are plant- or fruit-derived.'),
(UPPER('Ambergris'), 'From whale intestines. Used as a fixative in making perfumes and as a flavoring in foods and beverages. Alternatives: synthetic or vegetable fixatives.'),
(UPPER('Amerchol L101'), ' See Lanolin. '),
(UPPER('Amino Acids'), 'The building blocks of protein in all animals and plants. In cosmetics, vitamins, supplements, shampoos, etc. Alternatives: synthetics, plant sources.'),
(UPPER('Aminosuccinate Acid'), ' See Aspartic Acid. '),
(UPPER('Angora'), 'Hair from the Angora rabbit or goat. Used in clothing. Alternatives: synthetic fibers.'),
(UPPER('Animal Fats and Oils'), 'In foods, cosmetics, etc. Highly allergenic. Alternatives: olive oil, wheat germ oil, coconut oil, flaxseed oil, almond oil, safflower oil, etc.'),
(UPPER('Animal Hair'), 'In some blankets, mattresses, brushes, furniture, etc. Alternatives: vegetable and synthetic fibers.'),
(UPPER('Arachidonic Acid'), 'A liquid unsaturated fatty acid that is found in liver, brain, glands, and fat of animals and humans. Generally isolated from animal liver. Used in companion animal food for nutrition and in skin creams and lotions to soothe eczema and rashes. Alternatives: synthetics, aloe vera, tea tree oil, calendula ointment.'),
(UPPER('Arachidyl Proprionate'), 'A wax that can be from animal fat. Alternatives: peanut or vegetable oil.'),
(UPPER('Bee Pollen'), 'Microsporic grains in seed plants gathered by bees then collected from the legs of bees. Causes allergic reactions in some people. In nutritional supplements, shampoos, toothpastes, deodorants. Alternatives: synthetics, plant amino acids, pollen collected from plants.'),
(UPPER('Bee Products'), 'Produced by bees for their own use. Bees are selectively bred. Culled bees are killed. A cheap sugar is substituted for their stolen honey. Millions die as a result. Their legs are often torn off by pollen-collection trapdoors.'),
(UPPER('Beeswax Honeycomb'), 'Wax obtained from melting honeycomb with boiling water, straining it, and cooling it. From virgin bees. Very cheap and widely used. May be harmful to the skin. In lipsticks and many other cosmetics, especially face creams, lotions, mascara, eye creams and shadows, face makeup, nail whiteners, lip balms, etc. Derivatives: Cera Flava. Alternatives: paraffin, vegetable oils and fats, ceresin  aka ceresine, earth wax; made from the mineral ozokerite; replaces beeswax in cosmetics; also used to wax paper, to make polishing cloths, in dentistry for taking wax impressions, and in candle-making , carnauba wax  from the Brazilian palm tree; used in many cosmetics, including lipstick; rarely causes allergic reactions , candelilla wax  from candelilla plants; used in many cosmetics, including lipstick; also in the manufacture of rubber and phonograph records, in waterproofing and writing inks; no known toxicity , Japan wax  vegetable wax, Japan tallow; fat from the fruit of a tree grown in Japan and China .'),
(UPPER('Biotin Vitamin H Vitamin B Factor'), 'In every living cell and in larger amounts in milk and yeast. Used as a texturizer in cosmetics, shampoos, and creams. Alternatives: plant sources.'),
(UPPER('Blood'), 'From any slaughtered animal. Used as adhesive in plywood, also found in cheese-making, foam rubber, intravenous feedings, and medicines. Possibly in foods such as lecithin. Alternatives: synthetics, plant sources.'),
(UPPER('Boar Bristles'), 'Hair from wild or captive hogs. In “natural” toothbrushes and bath and shaving brushes. Alternatives: vegetable fibers, nylon, the peelu branch or peelu gum  Asian, available in the U.S.; its juice replaces toothpaste .'),
(UPPER('Bone Char'), 'Animal bone ash. Used in bone china and often to make sugar white. Serves as the charcoal used in aquarium filters. Alternatives: synthetic tribasic calcium phosphate.'),
(UPPER('Bone Meal'), 'Crushed or ground animal bones. In some fertilizers. In some vitamins and supplements as a source of calcium. In toothpastes. Alternatives: plant mulch, vegetable compost, dolomite, clay, vegetarian vitamins.'),
(UPPER('Calciferol'), ' See Vitamin D. '),
(UPPER('Calfskin'), ' See Leather. '),
(UPPER('Caprylamine Oxide'), ' See Caprylic Acid. '),
(UPPER('Capryl Betaine'), ' See Caprylic Acid. '),
(UPPER('Caprylic Acid'), 'A liquid fatty acid from cow’s or goat’s milk. Also from palm, coconut, and other plant oils. In perfumes, soaps. Derivatives: Caprylic Triglyceride, Caprylamine Oxide, Capryl Betaine. Alternatives: plant sources, especially coconut oil.'),
(UPPER('Caprylic Triglyceride'), ' See Caprylic Acid. '),
(UPPER('Carbamide'), ' See Urea. '),
(UPPER('Carmine Cochineal Carminic Acid'), 'Red pigment from the crushed female cochineal insect. Reportedly, 70,000 beetles must be killed to produce one pound of this red dye. Used in cosmetics, shampoos, red apple sauce, and other foods  including red lollipops and food coloring . May cause allergic reaction. Alternatives: beet juice  used in powders, rouges, shampoos; no known toxicity , alkanet root  from the root of this herb-like tree; used as a red dye for inks, wines, lip balms, etc.; no known toxicity; can also be combined to make a copper or blue coloring .  See Colors. '),
(UPPER('Carminic Acid'), ' See Carmine. '),
(UPPER('Carotene Provitamin A Beta Carotene'), 'A pigment found in many animal tissues and in all plants. When used as an additive, typically derived from plant sources. Used as a coloring in cosmetics and in the manufacture of vitamin A.'),
(UPPER('Casein Caseinate Sodium Caseinate'), 'Milk protein. In “nondairy” creamers, soy cheese, many cosmetics, hair preparations, beauty masks. Alternatives: soy protein, soy milk, and other vegetable milks.'),
(UPPER('Caseinate'), ' See Casein. '),
(UPPER('Cashmere'), 'Wool from the Kashmir goat. Used in clothing. Alternatives: synthetic fibers.'),
(UPPER('Castor Castoreum'), 'Creamy substance with strong odor, originally from muskrat and beaver genitals but now typically synthetic. Used as a fixative in perfume and incense. While some cosmetics companies continue to use animal castor, the majority do not.'),
(UPPER('Castoreum'), ' See Castor. '),
(UPPER('Catgut'), 'Tough string from the intestines of sheep, horses, etc. Used for surgical sutures. Also for stringing tennis rackets, musical instruments, etc. Alternatives: nylon and other synthetic fibers.'),
(UPPER('Cera Flava'), ' See Beeswax. '),
(UPPER('Cerebrosides'), 'Fatty acids and sugars found in the covering of nerves. May be synthetic or of animal origin. When animal-derived, may include tissue from brain. Used in moisturizers.'),
(UPPER('Cetyl Alcohol'), 'Wax originally found in spermaceti from sperm whales or dolphins but now most often derived from petroleum. Alternatives: vegetable cetyl alcohol  e.g., coconut , synthetic spermaceti.'),
(UPPER('Cetyl Palmitate'), ' See Spermaceti. '),
(UPPER('Chitosan'), 'A fiber derived from crustacean shells. Used as a lipid binder in diet products; hair, oral, and skin-care products; antiperspirants; and deodorants. Alternatives: raspberries, yams, legumes, dried apricots, many other fruits and vegetables.'),
(UPPER('Cholesterin'), ' See Lanolin. '),
(UPPER('Cholesterol'), 'A steroid alcohol in all animal fats and oils, nervous tissue, egg yolk, and blood. Can be derived from lanolin. In cosmetics, eye creams, shampoos, etc. Alternatives: solid complex alcohols  sterols  from plant sources.'),
(UPPER('Choline Bitartrate'), ' See Lecithin. '),
(UPPER('Civet'), 'Unctuous secretion painfully scraped from a gland very near the genital organs of civet cats. Used as a fixative in perfumes. Alternatives:  See alternatives to Musk. '),
(UPPER('Cochineal'), ' See Carmine. '),
(UPPER('Cod Liver Oil'), ' See Marine Oil. '),
(UPPER('Collagen'), 'Fibrous protein in vertebrates. Usually derived from animal tissue. Can’t affect the skin’s own collagen. An allergen. Alternatives: soy protein, almond oil, amla oil  see alternatives to Keratin , etc.'),
(UPPER('Colors Dyes'), 'Pigments from animal, plant, and synthetic sources used to color foods, cosmetics, and other products. Cochineal is from insects. Widely used FD&C and D&C colors are coal-tar  bituminous coal  derivatives that are continuously tested on animals because of their carcinogenic properties. Alternatives: grapes, beets, turmeric, saffron, carrots, chlorophyll, annatto, alkanet.'),
(UPPER('Corticosteroid'), ' See Cortisone. '),
(UPPER('Cortisone Corticosteroid'), 'When animal-derived, a hormone from adrenal glands. However, a synthetic is widely used. Typically used in medicine. Alternatives: synthetics.'),
(UPPER('Cysteine, L-Form'), 'An amino acid from hair that can come from animals. Used in hair-care products and creams, in some bakery products, and in wound-healing formulations. Alternatives: plant sources.'),
(UPPER('Cystine'), 'An amino acid found in urine and horsehair. Used as a nutritional supplement and in emollients. Alternatives: plant sources.'),
(UPPER('Dexpanthenol'), ' See Panthenol. '),
(UPPER('Diglycerides'), ' See Monoglycerides and Glycerin. '),
(UPPER('Dimethyl Stearamine'), ' See Stearic Acid. '),
(UPPER('Down'), 'Goose or duck insulating feathers. From slaughtered or cruelly exploited geese. Used as an insulator in quilts, parkas, sleeping bags, pillows, etc. Alternatives: polyester and synthetic substitutes, kapok  silky fibers from the seeds of some tropical trees  and milkweed seed pod fibers.'),
(UPPER('Duodenum Substances'), 'From the digestive tracts of cows and pigs. Added to some vitamin tablets. In some medicines. Alternatives: vegetarian vitamins, synthetics.'),
(UPPER('Dyes'), ' See Colors. '),
(UPPER('Egg Protein'), 'In shampoos, skin preparations, etc. Alternatives: plant proteins.'),
(UPPER('Elastin'), 'Protein found in the neck ligaments and aortas of cows. Similar to collagen. Can’t affect the skin’s own elasticity. Alternatives: synthetics, protein from plant tissues.'),
(UPPER('Ergocalciferol'), 'From flightless ratite birds native to Australia and now factory-farmed. Used in cosmetics and creams. Alternatives: vegetable and plant oils.'),
(UPPER('Estradiol'), ' See Vitamin D. '),
(UPPER('Fats'), ' See Vitamin D. '),
(UPPER('FD&C Colors'), ' See Estrogen. '),
(UPPER('Fish Liver Oil'), 'Female hormones from pregnant mares’ urine. Considered a drug. Can have harmful systemic effects if used by children. Used for reproductive problems and in birth control pills and Premarin, a menopausal drug. In creams, perfumes, and lotions. Has a negligible effect in the creams as a skin restorative; simple vegetable-source emollients are considered better. Alternatives: oral contraceptives and menopausal drugs based on synthetic steroids or phytoestrogens  from plants, especially palm-kernel oil . Menopausal symptoms can also be treated with diet and herbs.'),
(UPPER('Fish Scales'), ' See Animal Fats. '),
(UPPER('Gel'), 'Can be one or any mixture of liquid and solid acids such as caprylic, lauric, myristic, oleic, palmitic, and stearic. Used in bubble baths, lipsticks, soap, detergents, cosmetics, food. Alternatives: vegetable-derived acids, soy lecithin, safflower oil, bitter almond oil, sunflower oil, etc.'),
(UPPER('Glucose Tyrosinase'), ' See Colors. '),
(UPPER('Glycerin Glycerol'), 'From exploited and slaughtered birds. Used whole as ornaments or ground up in shampoos.  See Down and Keratin. '),
(UPPER('Glyceryls'), 'Used in vitamins and supplements. In milk fortified with vitamin D. Alternatives: yeast extract ergosterol, exposure of skin to sunshine.'),
(UPPER('Guanine Pearl Essence'), ' See Marine Oil.  Fish oil can also be from marine mammals. Used in soapmaking.'),
(UPPER('Honey'), 'Used in shimmery makeup. Alternatives: mica, rayon, synthetic pearl.'),
(UPPER('Horsehair'), 'Obtained from animals  usually mink, foxes, or rabbits  cruelly trapped in steel-jaw traps or raised in intensive confinement on fur farms. Alternatives: synthetics.  See Sable Brushes. '),
(UPPER('Hydrocortisone'), ' See Gelatin. '),
(UPPER('Imidazolidinyl Urea'), 'Protein obtained by boiling skin, tendons, ligaments, and/or bones in water. From cows and pigs. Used in shampoos, face masks, and other cosmetics. Used as a thickener for fruit gelatins and puddings  e.g., Jell-O . In candies, marshmallows, cakes, ice cream, yogurts. On photographic film and in vitamins as a coating and as capsules. Sometimes used to assist in “clearing” wines. Alternatives: carrageen  carrageenan, Irish moss , seaweeds  algin, agar-agar, kelp—used in jellies, plastics, medicine , pectin from fruits, dextrins, locust bean gum, cotton gum, silica gel. Marshmallows were originally made from the root of the marshmallow plant. Vegetarian capsules are now available from several companies. Digital cameras don’t use film.'),
(UPPER('Isinglass'), ' See Tyrosine. '),
(UPPER('Isopropyl Myristate'), ' See Glycerin. '),
(UPPER('Keratin'), 'A byproduct of soap manufacture  normally uses animal fat . In cosmetics, foods, mouthwashes, chewing gum, toothpastes, soaps, ointments, medicines, lubricants, transmission and brake fluid, and plastics. Derivatives: Glycerides, Glyceryls, Glycreth-26, Polyglycerol. Alternatives: vegetable glycerin  a byproduct of vegetable oil soap , derivatives of seaweed, petroleum.'),
(UPPER('Lactose'), ' See Glycerin. '),
(UPPER('Lanogene'), ' See Glycerin. '),
(UPPER('Lanolin Alcohol'), 'Tree sap gathered by bees and used as a sealant in beehives. In toothpaste, shampoo, deodorant, supplements, etc. Alternatives: tree sap, synthetics.'),
(UPPER('Lard'), ' See Glycerin. '),
(UPPER('Lecithin Choline Bitartrate'), 'Obtained from scales of fish. Constituent of ribonucleic acid and deoxyribonucleic acid and found in all animal and plant tissues. In shampoo, nail polish, other cosmetics. Alternatives: leguminous plants, synthetic pearl, or aluminum and bronze particles.'),
(UPPER('Lipase'), 'Same as gelatin but of a cruder impure form. Alternatives: dextrins and synthetic petrochemical-based adhesives.  See Gelatin. '),
(UPPER('Lipoids Lipids'), ' See Panthenol. '),
(UPPER('Methionine'), 'Food for bees, made by bees. Can cause allergic reactions. Used as a coloring and an emollient in cosmetics and as a flavoring in foods. Should never be fed to infants. Alternatives: in foods—maple syrup, date sugar, syrups made from grains such as barley malt, turbinado sugar, molasses; in cosmetics—vegetable colors and oils.'),
(UPPER('Mink Oil'), ' See Beeswax. '),
(UPPER('Musk  Oil '), ' See Animal Hair. '),
(UPPER('Myristic Acid'), 'Enzyme from calves’ stomachs. Used in cheesemaking, rennet custard  junket , and in many coagulated dairy products. Alternatives: microbial coagulating agents, bacteria culture, lemon juice, or vegetable rennet.'),
(UPPER('“Natural Sources”'), 'When animal-derived, a protein found in umbilical cords and the fluids around the joints. Used in cosmetics and some medical applications. Alternatives: synthetic hyaluronic acid, plant oils.'),
(UPPER('Ocenol'), ' See Cortisone. '),
(UPPER('Oleic Acid'), 'In cosmetics, especially shampoo and hair treatments. Alternatives: soy protein, other vegetable proteins, amla oil  see alternatives to Keratin .'),
(UPPER('Oleths'), ' See Shellac. '),
(UPPER('Oleyl Arachidate'), ' See Urea. '),
(UPPER('Oleyl Myristate'), 'From hog pancreas. Used by millions of diabetics daily. Alternatives: synthetics, vegetarian diet and nutritional supplements, human insulin grown in a lab.'),
(UPPER('Oleyl Stearate'), 'A form of gelatin prepared from the internal membranes of fish bladders. Sometimes used in “clearing” wines and in foods. Alternatives: bentonite clay, “Japanese isinglass,” agar-agar  see alternatives to Gelatin , mica, a mineral used in cosmetics.'),
(UPPER('Palmitamine'), ' See RNA. '),
(UPPER('Palmitic Acid'), ' See Lanolin. '),
(UPPER('Panthenyl'), ' See Myristic Acid. '),
(UPPER('Placenta Placenta Polypeptides Protein Afterbirth'), 'Complex mixtures of isomers of stearic acid and palmitic acid.  See Stearic Acid. '),
(UPPER('Polypeptides'), 'Secretion from the throat glands of worker honeybees. Fed to the larvae in a colony and to all queen larvae. No proven value in cosmetics preparations. Alternatives: aloe vera, comfrey, other plant derivatives.'),
(UPPER('Pristane'), 'Protein from the ground-up horns, hooves, feathers, quills, and hair of various animals. In hair rinses, shampoos, permanent wave solutions. Alternatives: almond oil, soy protein, amla oil  from the fruit of an Indian tree , human hair from salons. Rosemary and nettle give body and strand strength to hair.'),
(UPPER('Propolis'), 'Typically derived from plants such as beets. When animal-derived, found in blood and muscle tissue. Also in sour milk, beer, sauerkraut, pickles, and other food products made by bacterial fermentation. Used in skin fresheners, as a preservative, in the formation of plasticizers, etc. Alternatives: plant milk sugars, synthetics.'),
(UPPER('Provitamin A'), 'Milk sugar from milk of mammals. In eye lotions, foods, tablets, cosmetics, baked goods, medicines. Alternatives: plant milk sugars.'),
(UPPER('Provitamin B-5'), ' See Turtle Oil. '),
(UPPER('Provitamin D-2'), ' See Lanolin. '),
(UPPER('Rennet Rennin'), ' See Lanolin. '),
(UPPER('Rennin'), 'A product of the oil glands of sheep, extracted from their wool. Used as an emollient in many skin-care products and cosmetics and in medicines. An allergen with no proven effectiveness.  See Wool for cruelty to sheep.  Derivatives: Aliphatic Alcohols, Cholesterin, Isopropyl Lanolate, Laneth, Lanogene, Lanolin Alcohols, Lanosterols, Sterols, Triterpene Alcohols. Alternatives: plant and vegetable oils.'),
(UPPER('Resinous Glaze'), ' See Leather. '),
(UPPER('Retinol'), ' See Lanolin. '),
(UPPER('Ribonucleic Acid'), ' See Lanolin. '),
(UPPER('RNA Ribonucleic Acid'), 'Fat from hog abdomens. In shaving creams, soaps, cosmetics. In baked goods, French fries, refried beans, and many other foods. Alternatives: pure vegetable fats or oils.'),
(UPPER('Royal Jelly'), 'Silk is the shiny fiber made by silkworms to form their cocoons. Worms are boiled in their cocoons to get the silk. Used in cloth. In silk-screening  other fine cloth can be and is used instead . Taffeta can be made from silk or nylon. Silk powder is obtained from the secretion of the silkworm. It is used as a coloring agent in face powders, soaps, etc. Can cause severe allergic skin reactions and systemic reactions if inhaled or ingested. Alternatives: milkweed seed-pod fibers, nylon, silk-cotton tree and ceiba tree filaments  kapok , rayon, and synthetic silks.'),
(UPPER('Sable Brushes'), 'Subsidizes the meat industry. Used to make wallets, handbags, furniture and car upholstery, shoes, etc. Alternatives: cotton, canvas, nylon, vinyl, ultrasuede, pleather, other synthetics.'),
(UPPER('Sea Turtle Oil'), 'Waxy substance in nervous tissue of all living organisms. But frequently obtained for commercial purposes from eggs and soybeans. Also from nerve tissue, blood, milk, corn. Choline bitartrate, the basic constituent of lecithin, is in many animal and plant tissues and prepared synthetically. Lecithin can be in eye creams, lipsticks, liquid powders, hand creams, lotions, soaps, shampoos, other cosmetics, and some medicines. Alternatives: soybean lecithin, synthetics.'),
(UPPER('Shark Liver Oil'), 'An essential fatty acid. Used in cosmetics, vitamins. Alternatives:  See alternatives to Fatty Acids. '),
(UPPER('Sheepskin'), ' See Casein. '),
(UPPER('Shellac Resinous Glaze'), 'Enzyme from the stomachs and tongue glands of calves, kids, and lambs. Used in cheesemaking and in digestive aids. Alternatives: vegetable enzymes, castor beans.'),
(UPPER('Silk Silk Powder'), ' See Lipoids. '),
(UPPER('Snails'), 'Fat and fat-like substances that are found in animals and plants. Alternatives: vegetable oils.'),
(UPPER('Sodium Caseinate'), ' See Tallow. '),
(UPPER('Sodium Steroyl Lactylate'), 'From fish or marine mammals  including porpoises . Used in soapmaking. Used as a shortening  especially in some margarines , as a lubricant, and in paint. Alternatives: vegetable oils.'),
(UPPER('Sodium Tallowate'), 'Essential amino acid found in various proteins  usually from egg albumen and casein . Used as a texturizer and for freshness in potato chips. Alternatives: synthetics.'),
(UPPER('Spermaceti Cetyl Palmitate Sperm Oil'), 'Hydrolyzed milk protein. From the milk of cows. In cosmetics, shampoos, moisturizers, conditioners, etc. Alternatives: soy protein, other plant proteins.'),
(UPPER('Sponge  Luna and Sea '), 'A plantlike animal. Lives in the sea. Becoming scarce. Alternatives: synthetic sponges, loofahs  plants used as sponges .'),
(UPPER('Squalane'), 'From minks. In cosmetics, creams, etc. Alternatives: vegetable oils and emollients such as avocado oil, almond oil, and jojoba oil.'),
(UPPER('Squalene'), 'From animal fat. In margarines, cake mixes, candies, foods, etc. In cosmetics. Alternative: vegetable glycerides.'),
(UPPER('Stearamide'), 'Dried secretion painfully obtained from musk deer, beaver, muskrat, civet cat, and otter genitals. Wild cats are kept captive in cages in horrible conditions and are whipped around the genitals to produce the scent; beavers are trapped; deer are shot. In perfumes and in food flavorings. Alternatives: labdanum oil  from various rockrose shrubs  and extracts from other plants with a musky scent.'),
(UPPER('Stearamine'), 'Oil from shark livers, etc. In cosmetics, moisturizers, hair dyes, surface-active agents. Alternatives: vegetable emollients such as olive oil, wheat germ oil, rice bran oil, etc.'),
(UPPER('Stearates'), ' See Myristic Acid. '),
(UPPER('Stearic Hydrazide'), 'Organic acid typically derived from nut oils but occasionally of animal origin. Used in shampoos, creams, cosmetics. In food flavorings. Derivatives: Isopropyl Myristate, Myristal Ether Sulfate, Myristyls, Oleyl Myristate. Alternatives: nut butters, oil of lovage, coconut oil, extract from seed kernels of nutmeg, etc.'),
(UPPER('Stearoxytrimethylsilane'), ' See Myristic Acid. '),
(UPPER('Stearyl Acetate'), 'Can mean animal or vegetable sources. Most often in the health-food industry, especially in the cosmetics area, it means animal sources, such as animal elastin, glands, fat, protein, and oil. Alternatives: plant sources.'),
(UPPER('Stearyl Betaine'), 'In the nucleus of all living cells. Used in cosmetics, shampoos, conditioners, etc. Also in vitamins, supplements. Alternatives: plant sources.'),
(UPPER('Stearyl Caprylate'), ' See Oleyl Alcohol. '),
(UPPER('Stearyl Citrate'), 'Mixture of solid waxy alcohols. Primarily from stearyl alcohol.  See Stearyl Alcohol. '),
(UPPER('Stearyldimethyl Amine'), 'Obtained from various animal and vegetable fats and oils. Usually obtained commercially from inedible tallow.  See Tallow.  In foods, soft soap, bar soap, permanent wave solutions, creams, nail polish, lipsticks, many other skin preparations. Derivatives: Oleyl Oleate, Oleyl Stearate. Alternatives: coconut oil.  See alternatives to Animal Fats and Oils. '),
(UPPER('Stearyl Glycyrrhetinate'), ' See alternatives to Animal Fats and Oils. '),
(UPPER('Stearyl Heptanoate'), ' See Oleyl Alcohol. '),
(UPPER('Stearyl Imidazoline'), 'Found in fish oils. Used in the manufacture of detergents, as a plasticizer for softening fabrics, and as a carrier for medications. Derivatives: Oleths, Oleyl Arachidate, Oleyl Imidazoline.'),
(UPPER('Stearyl Octanoate'), ' See Oleyl Alcohol. '),
(UPPER('Stearyl Stearate'), ' See Oleyl Alcohol. '),
(UPPER('Steroids Sterols'), ' See Myristic Acid. '),
(UPPER('Sterols'), ' See Oleic Acid. '),
(UPPER('Suede'), ' See Oleic Acid. '),
(UPPER('Tallow Tallow Fatty Alcohol Stearic Acid'), ' See Palmitic Acid. '),
(UPPER('Tallow Acid'), ' See Palmitic Acid. '),
(UPPER('Tallow Amide'), ' See Palmitic Acid. '),
(UPPER('Tallow Amine'), 'A fatty acid most commonly derived from palm oil but may be derived from animals as well. In shampoos, shaving soaps, creams. Derivatives: Palmitate, Palmitamine, Palmitamide. Alternatives: vegetable sources.'),
(UPPER('Talloweth-6'), 'Can come from animal or plant sources or synthetics. In shampoos, supplements, emollients, etc. In foods. Derivative: Panthenyl. Alternatives: synthetics, plants.'),
(UPPER('Tallow Glycerides'), ' See Panthenol. '),
(UPPER('Tallow Imidazoline'), 'In hogs’ stomachs. A clotting agent. In some cheeses and vitamins. Same uses and alternatives as Rennet.'),
(UPPER('Triterpene Alcohols'), 'Contains waste matter eliminated by the fetus. Derived from the uterus of slaughtered animals. Animal placenta is widely used in skin creams, shampoos, masks, etc. Alternatives: kelp.  See alternatives to Animal Fats and Oils. '),
(UPPER('Turtle Oil Sea Turtle Oil'), ' See Glycerin. '),
(UPPER('Tyrosine'), 'From animal protein. Used in cosmetics. Alternatives: plant proteins and enzymes.'),
(UPPER('Urea Carbamide'), 'Derivatives of fatty acids. In cosmetics, foods.'),
(UPPER('Uric Acid'), 'Obtained from the liver oil of sharks and from whale ambergris.  See Squalene, Ambergris.  Used as a lubricant and anti-corrosive agent. In cosmetics. Alternatives: plant oils, synthetics.'),
(UPPER('Vitamin A'), 'A steroid hormone used in anti-wrinkle face creams. Can have adverse systemic effects. Alternatives: synthetics.'),
(UPPER('Vitamin B-Complex Factor'), ' See Carotene. '),
(UPPER('Vitamin B Factor'), ' See Vitamin D. '),
(UPPER('Vitamin B12'), ' See Rennet. '),
(UPPER('Vitamin D Ergocalciferol Vitamin D2 Ergosterol Provitamin D2 Calciferol Vitamin D3'), 'Animal-derived vitamin A. Alternative: carotene.'),
(UPPER('Vitamin H'), 'RNA is in all living cells. Used in many protein shampoos and cosmetics. Alternatives: plant cells.'),
(UPPER('Wax'), 'From the fur of sables  weasel-like mammals . Used to make eye makeup, lipstick, and artists’ brushes. Alternatives: synthetic fibers.'),
(UPPER('Whey'), 'Used in lubricating creams and lotions. Derivatives: Squalane, Squalene. Alternatives: vegetable oils.'),
(UPPER('Wool'), 'Resinous excretion of certain insects. Used as a candy glaze, in hair lacquer, and on jewelry. Alternatives: plant waxes, Zein  from corn .'),
(UPPER('Wool Fat'), 'In some cosmetics  crushed .'),
(UPPER('Wool Wax'), ' See Lactic Acid. ');

```

## Screen Shot

Include one or two screen shots of your project here (optional). Remove if unused.


### Completed Features

High level list of items completed.

- [x] User can upload a photo from their device. Upon clicking 'upload', a message will pop up telling the user whether or not the product is vegan.
- [x] If the product is not vegan, a list of any non-vegan ingredients and their descriptions will be displayed.

### Next Steps

Features that you would like to add at some point in the future.

- [ ] Expand the app to include other diets, including gluten-free, Paleo, Whole 30, religious dietary restrictions, and others
- [ ] Make the app mobile-responsive


## Authors

* Developers: Liz Haakenson, Levy Kohout, Kim Mai, and Emma Stout
* UX Designer: Kelsey Gullickson
* Project Manager and Researcher: Maham Maus


## Acknowledgments

# 

# totally_radish
