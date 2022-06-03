'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "dfb95f2652599615dea7b791e5c994a4",
".git/config": "615e840a4e0b59a36fd993a45ef5e3ee",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "54dd38d0503d8641c2e238841cf172c0",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "58554f98fb3daf4a1d52197e571d67b2",
".git/logs/refs/heads/main": "ce8c72346d4136c550a6b90bf449a0de",
".git/logs/refs/remotes/origin/main": "9cd00cabe5d35e27c1e3ed0e58e87de1",
".git/objects/00/c6c151f8f7a7d610daa32e3f4c1670386eb982": "a33a0fb2810d4169cf4727c4b76a2976",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/03/4a7ae71038ccf1d6edaafd4c28defe57186245": "578031a147c2cd54609209cd9e9d15ed",
".git/objects/04/c1b64a4dfe5c98f7458c2e05353176d732fe57": "fea4acb7f2cd9e47cf4234e5dcbf2360",
".git/objects/07/52447a2dbe2981fcd87c36c36228fb0bfbd282": "a3846c0263627240c993eb41e9592d71",
".git/objects/09/24c9dad3d6ce5c938cd63157861425fa414e44": "a394a18abcb4540ee006dc7576f3111f",
".git/objects/0a/62072fc310f94841978948007627e73c062c72": "ebcb3481a4db41829f8d45fb7c102ddf",
".git/objects/0b/115ca9652eab65a91a888dabfa605b2c1f856b": "584bd4071a440172d7c032b2d2c2192c",
".git/objects/0c/3291337a8e87e2a85268aa064cce018e96aa4d": "d777de975d8702c96b88f42755387172",
".git/objects/0c/4b7423f5f026310e26a85149fe56438af52392": "1047e44ad56d027931617a19de5abbfa",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0f/24068ee11ff6dc8ffbe2394b1a3f29bd0ad421": "e1839f96fc5323d129ba28dd7d72f631",
".git/objects/13/160d2666aef15ab21bf90306f2b2c0c9d7f7be": "2e4ffeece38ff3e901d135698e4b8711",
".git/objects/13/e07cb935086a8a406a0dff11ac26cb51817286": "5e57efb6233cdcf178db8dc3e0f6b375",
".git/objects/14/8862bb51cebc545d3ef47f599957995f8fd9e0": "9bbb68c03c8ee553d1f8103ff4bec7af",
".git/objects/16/afe3d42536c2af3f43c82415ba2fa380465f11": "040a7bece7b64252ba22869e785c4a2d",
".git/objects/16/cebc2b681754818660a92a5e5d4244a798fb7f": "ee568701f96182eaaebfa4344dfd2bdb",
".git/objects/1a/7c353e6445a08a6ac0c5df7a75e84bac91d5af": "66f866178b4b67ecb7499f1743e20865",
".git/objects/1b/8d3d80ba694216986d68da8e1375cad8dbf992": "b263255314bef15dc45f510b31ffbd30",
".git/objects/23/41b71ddf1e52362b144e58c1eec8694696c67c": "e432a7d4f6f847f1ceb28ce9f1d430ab",
".git/objects/24/7d2fc23e3adc507f98de1ecf6dbb54e1263c61": "3f285ec96626124ec3290b5d175029ea",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/25/ee489e442ded5a1e63425d0966c954023f29ff": "fe249e8eaa9020e8447dfb8ce9baf389",
".git/objects/27/bfe25bbec9c583fc52f350c497f89141de1d75": "67d486a990e46766578a3ba804201174",
".git/objects/28/5c1cd475381ff3d6843647d7a88cff4dd466fa": "a622cda8ee734206d45e1699d94b6944",
".git/objects/2b/dfbd3c575b14d36d2568f58ff12c1e60471899": "103225dfc2c7e4bbe361450e23efffe2",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2e/1c0fbb6232614771e9193ea1b5abaf08620d1f": "cd00bca93ab3b9d73dc933e7e663eac2",
".git/objects/2e/82d6a5e1965a300adf9a91bf33ace0610e10e1": "288f077524511ec960968b2b61c6e24d",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/34/97133e023b10667fc99d3c427a6274abc5486f": "05e3aa9a70ced6509ddc6311abade761",
".git/objects/37/1ea0574405c96d7e49841d0d04356dd9d3bf8d": "f1eca7759dc1dbefd4f770cdde631561",
".git/objects/3b/c82e65f8c50a3ec2af0e526935dfa985829d36": "6795ea5b426fd6e28a753569533c1bba",
".git/objects/40/ae0d02bfdddda58fc9e4e017e783632ca21750": "3f02efa290f886aa80bc0fdc9fa96edb",
".git/objects/47/24a0561c7966ecacf54e266337263a87d40db5": "f9bed9e09e5075a8aeb09f0541657892",
".git/objects/4b/96a7ff0b0a42b0dc2e078876f1a8621ba327c7": "9ea7f139b459b0a21a39e0a472e52243",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/52/ee293f8555f68de18f2f3a35614128f19ad421": "2e252ed33eef48d0699553f9e602cb8f",
".git/objects/53/a83ee1eca3d4af395d407391f35ecd0c1b5b99": "0aa2593d54db4c88a8de01b6ab6e449a",
".git/objects/55/93040b53997f82a745ceb586c55f88ede9b611": "fbc70b4143b61ffae65b5e7456904935",
".git/objects/58/071e58e4957763196c09083b4088d640e6db49": "77b7117427f49f6b9c5dd109fb1d9ad8",
".git/objects/58/24b3514fa595bcae646fe0b504fbb041f449e4": "d77d6191189cb6817ce2e3594c1c3a82",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/59/e7c2c7728f05a9ce4bbbc88d38d9b0146c171b": "1ecb5cf5889d64525bb4133ff5fe71ae",
".git/objects/5c/8203d94b4233c6723558414a12faea5a4b06f4": "8dbb97aafd2520ab2b6f61898fd5d4f5",
".git/objects/5c/9a426cfff85bf8385dcf70870265450d3a2ba6": "ccecf53e9fa9653e9d9bd9966bd52a25",
".git/objects/60/3534eedb6d8a2352cd004e5fadaa8763b30a47": "f759b59b822a4a650c42a44c17444cc6",
".git/objects/61/81afa883112845173241818fadd8d4c9e365f7": "021cfac2f5104b216ffa39fefba323e2",
".git/objects/61/82085ac36f990d76c263f4b32cddd0287b6872": "775b70969379e97b588bd841f2b0fb78",
".git/objects/62/129e0c163887b543f90419ff3d3be867c11ccd": "52f934952b07ccaf1ae4b7a67b00e98d",
".git/objects/67/3bb680bb8b1285b4975c3845ad661e119f83d2": "a4e56d754503b0a964023c4f0ca66625",
".git/objects/68/43628e2ff2e8741e41b3502e2e9b90557f276f": "f5f12157148f849605901cc17f8e7598",
".git/objects/69/530a622315d60bb2056ba0cc87bf955c83a790": "376a73fba95719cb2088db2920831214",
".git/objects/6a/04c9f926841972150dc8ca9bf051061e53c9d7": "c0b5f179349645872db72da4506393ff",
".git/objects/6a/9a1cf3b55096bc2142c4e0798c51ebccec391a": "e7f8c7cab84ecc63daff7552417e6600",
".git/objects/6b/a2582200090154aa8c655bee4f44324c874ad1": "20e42385b156f05824a04babbdc98c38",
".git/objects/6d/cb922203d0c5d12d2496c0f8935e006111f45d": "2b51c4db55a16540f7cd8f0734481073",
".git/objects/6e/a6954902213f5c9451484b85384263b01b215a": "53e9abc8a11ab3f765e59fa8fbb8df4e",
".git/objects/76/4f2aca2004b022d8321a235adebe853da293ca": "a08618c154311981d2ec7a0ad11b27fe",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/78/8dbe5f8bb010b738c8d2a5363aea930442a57a": "3688c98f52eac0ee7dd0dd50e00294b9",
".git/objects/78/d97b4348d4a2a0d55a1773ff7c09b2d257a893": "2023c49f7deb8e1f07af35e448feb6b5",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/be61cfc541dfb2ee203d8fb89d1e987f290a78": "128f972143c7a949c0223cdebae1cf50",
".git/objects/7f/55546951c9bd8dab8c3fff80681452d65404fc": "f96308d2639e7ccc647ad10e19db9596",
".git/objects/81/e8e89235f66fae25cc2b88a19b058c47392081": "526a4cd541e21def3cf58a821f00d192",
".git/objects/86/1cf90c4cf121925b12752a2ae8569c402312ce": "551a3d06ccb035d53d50b9d1c48a9766",
".git/objects/86/c48faa5b645429babc26210eabfb91c8ddf15f": "b842e765542fc7a52f20200600aeaff4",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/d0dff41930789f8b50157a8d5b502e31973f49": "0fadff8b723c2b3dcbe22366f442a929",
".git/objects/89/e752fb1dd0ee8aaa101cc4fad1a15239494082": "8a55329729a02a6b1d0ad9c24f193406",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/09d52c2eab12d18d16f85403afabe82cae6835": "01ba36e30b02b45852f474081490cafc",
".git/objects/92/fc41c3751b478f701c8f68ba441f96d94a591c": "3eaad4d06bd881e76e588b1ad9c70812",
".git/objects/9d/7209a849b9653b6265b75cfee6ee2faf9b6fa3": "218833dfbf99b148367651e2b1557417",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/bc9416dd5bf9227f4d356b1e04f339d45dc910": "770a646d1a6339f301aef465ee627192",
".git/objects/a7/580b74cffc2be40172dd961c5d28de3aba3582": "007050a5633ee4bc4053d0983e44a966",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a8/ca5717ebe23c61b90005ba5720e34153d5a174": "c0326c069eef77eecad7e8996f1f21b2",
".git/objects/a9/bc385c38cbb7e18c73fd695657d522609a9f87": "961cb5bd4bae31e4a239a88aaf7acee4",
".git/objects/ab/094578bd61916cdb3b53e06a62bbba556a279c": "8671bb1bc08ca62da76c100b0d931af0",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/e5476caba314a8c01be1c2a83af378990bc3c9": "064ae6a00e46d7548bde78692d432b5f",
".git/objects/ad/543c535b76b4bfb0dac0a809f53c88500d58fc": "a3c943d92ea5fd042b30a2216282055b",
".git/objects/ad/8dda0e8bfbf75acf2d691efe62b3c2df3d1915": "3a6abdf6e78df36faaea29bd08f296c7",
".git/objects/ad/c13690bd7d65f1ee15ab37272615c2f697e5eb": "ceea2b2328e581200b810d4f6f20b35e",
".git/objects/ae/058508996e486342ea8caac80032c2950aad1a": "c9b825440f8a836e4caaad269a306a89",
".git/objects/af/dec7c778145aac8f9672356869cae55b5a1c01": "9aed43e46a356eb603340366c3fdbb1f",
".git/objects/b5/b9bddbef90e9f16ecc3fea753e6c4b0f7664b4": "d7548e682dae4d00c350bb17a90b97e7",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/3f331ae57af39f245daab37d87384cbe948135": "cc9f9651dcf298bf8e0afacb42ab9b10",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/91e9e3a42e2316658ee264e9a32b78a420b456": "58e41fa29da84284f1505f9a71046d05",
".git/objects/bd/2140e1cc364044e759410bfbddea85ae632935": "308761757c9fcca027002edf2745c9d9",
".git/objects/c0/0482bb24c6d7a0aad058cb70d443f7e4f17f92": "c8bb383fd331dfc8052e825675cebd74",
".git/objects/c0/3c4ea780ea34a4d779131b877472c4a8190e2b": "0615b03d0f42b53de7f700894d1cc366",
".git/objects/c5/3ff9b51201836c26b6044c96211b2f69b8791e": "6ca06fd07c299096dc2a8c37e824983b",
".git/objects/c7/963a63529b65cf295b60856dc1993bd9a58213": "16e80713db82a3308e92c7f101ff9fd2",
".git/objects/c7/97c5d5008f6b0aad099115d39631b8d5086ca0": "b7ffd94b9c6571b180099789e1a05522",
".git/objects/ca/838306cb805cd0bbc3ccb586d9751ff51e31d0": "63a35e4f093dbfa305dff2f3f79193b1",
".git/objects/cb/5cbd423ed3c2864c73bcff9bf6a884f3d9c571": "b727c60350b763b43fc9913f2c75dd57",
".git/objects/cb/bc7a8a031ee83e33c59f950ae74c301d115163": "3d934bad1656b15d5e00a005548fa870",
".git/objects/cb/fe8c6a61b14a9891428e36cf3474678e6979a2": "63a0aa437b64327a91729106e3362621",
".git/objects/cc/c22cd7538c23cd50c7348a02c7212f16aef513": "1db46e1a8b5f94d875aa7b63bafe1335",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cd/95af31d8121ffe4c96202a751ecf278a4997db": "72e0614065169cc0bf90f85f85bbb059",
".git/objects/cf/23d126d2e2418686bc0c12d7900994d1eb3388": "deb4cd4d7da36f09036f1e3ed299ce85",
".git/objects/d0/32dd35ce646f45c755c4f04c1a969895a64201": "e2c1e2f191baba11bc65a77d12f9b217",
".git/objects/d0/f3fdd69c89dad427f28c298f89e7eee9692bab": "77dc713d367dbfadfafc9a7413132721",
".git/objects/d3/170c4f692ebd4324c8176acf3e736e1928f9e4": "3dcd062984eff9d1acd8e17bd3dbf285",
".git/objects/d4/14df1fc3e099ac5cf7dbfc7a7edac6edabc3a6": "6c75a595e4e648d033ae0337eef61bf2",
".git/objects/d5/d02258bcf63f1758a3f39112bf49376abb74be": "eec4d264922299110e109f55398b82e2",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/8df80837a70a7168913d1741842c0f16fcd20f": "af638c349b8268796bbee60ce0b632d6",
".git/objects/dd/5b7e001657026098808df4a88982121d38131a": "50a4d241a3931a6f51123a251f99ebee",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/df/15b398a454d1af141458fb94d6cc571b85b22e": "85c549032db85384b0b56b820a1a963f",
".git/objects/e1/fb77366b1956ad3892e28766c9e9de6912c0b1": "251381ac1ade3860a161c26043da5698",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/dbc5a1145b27a26e364a29942b4d2150676761": "c122c21f5d0ad63ecc4b46b7ae5aacce",
".git/objects/e9/62790eaa348135c11b3f3cdf8fb4ef3889bc76": "4e3aafcf0eee697fe38f462e0c401535",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/3f89f05dd923cbf981ab201d9fd05d7508efcc": "6a008ca1cc85cf0c93200341004a3d49",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/02cddbb5721490580c2cfce57cece27f7c457c": "44fc81b24aa9e3c95616be6548f49a9d",
".git/objects/f3/b9a27d4649d1bc53e05631f6a35ff2d10139c2": "6d0fa3b02a357d7327297f8405cb2686",
".git/objects/f4/4ed6cea5e4d72dc28f663062c579cfcd21bdb4": "7f9b8190eaec70c7297c8a2ef65043f7",
".git/objects/f5/fb3720bc9e624a7a2725bbc22cd3f592f246b0": "48f93fa6049ceb5de175139efe6cb29a",
".git/objects/f6/de9b3c8100d4f1fa3cfc93cdf9fede057fb49a": "d197c8fc725c2fde3d9367ba6f9ef5c7",
".git/objects/f6/f84c9ad0cc6abeb3eb44730c9addd134f19b42": "b5d496fd3c4ffa20674600b86e5d5f6e",
".git/objects/f7/7c65ea0605d0177e190902d4031cd61124fb90": "56cd37143befa63e32111aa5257bac9f",
".git/objects/fc/5ee92b165fc915e6c29d8bc83f439fe9ba2747": "b1fb7225c0e2a105100cc258c956aea4",
".git/objects/fd/6ee834bb95548373510ab2f74068f205043b56": "69f470682205df3d0087c7f45181299b",
".git/objects/fd/e121e5fa4bb994b1ecc6d3ac8e902dd2531d53": "89a8ac0a2dbf8faae919f000dc27d2df",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/refs/heads/main": "abe8c61ae21a6cd708f68b242ee2bb5b",
".git/refs/remotes/origin/main": "abe8c61ae21a6cd708f68b242ee2bb5b",
"assets/AssetManifest.json": "ec0207f9d414a4f5451ab577edc83457",
"assets/assets/animation/hovering-animation.riv": "292147b2b4730e8e0c977abb05277b28",
"assets/assets/animation/upload-animation.riv": "1e280a637bcc7a01af54f0d8597f00c3",
"assets/assets/font/Festive-Regular.ttf": "607587a4eaa3619143663d4306c97cd4",
"assets/assets/font/Horizon.otf": "1b054287f76ee4678531039506fc46a3",
"assets/assets/font/MeaCulpa-Regular.ttf": "a9440d701061918338937038a7150f19",
"assets/assets/font/Memorial-Lane.ttf": "a1727ecbab641940c74aa48cbcedbdba",
"assets/assets/font/Monoton-Regular.ttf": "d20753b0996b7092460eef623995f880",
"assets/assets/font/Redressed-Regular.ttf": "b78f7d6f2895718c0c4ea048e0c05585",
"assets/assets/font/ZenKakuGothicAntique-Bold.ttf": "a5d9f2854ea2e93bb9e03cb7f0740448",
"assets/assets/font/ZenKakuGothicAntique-Light.ttf": "866719fd766e96bdfa887747b13f0e24",
"assets/assets/font/ZenKakuGothicAntique-Medium.ttf": "7e848bc15d7dbaf38ecc1c9c07024028",
"assets/assets/font/ZenKakuGothicAntique-Regular.ttf": "6ddf564d1f9f2d3c3cd5b6df8cb55c45",
"assets/assets/icons/android.png": "559a0a9a1aa7eef40fe601175855a7d5",
"assets/assets/icons/contact.png": "0f76f1b5bad5996784da58942a05e3b1",
"assets/assets/icons/cpp.png": "e4f46516b8d0d4b45f958b7e404f2d55",
"assets/assets/icons/dart.png": "67afaf26546ac978c500b22ba7707dda",
"assets/assets/icons/database.png": "b86c7d6b783c5c0c9734d0f4318a22f9",
"assets/assets/icons/docker.png": "ae93670ce4623300949eb7eb901a6d3b",
"assets/assets/icons/email.png": "a3b8fe3524ac2fea160fa5bc3d74910f",
"assets/assets/icons/facebook.png": "01d7fe99cc6c29a1e0858f11cd0290fe",
"assets/assets/icons/fb.png": "bbfcaa617a5526b4d569989b3fda5f9b",
"assets/assets/icons/firebase.png": "c24b6b9c0fcd84c7b258879880472660",
"assets/assets/icons/flutter.png": "29cc077b8f33a112a45d90c8faa68cc3",
"assets/assets/icons/github.png": "2698f0e8dde3375a4dd3f5c20c4ab8b1",
"assets/assets/icons/google.png": "3e26049d9396f49912688a986b4027b8",
"assets/assets/icons/idea.png": "cfbd667ab5ca4982fdf34d6eaa7704e6",
"assets/assets/icons/instagram.png": "5c570427ee23f69853d28aec805eee79",
"assets/assets/icons/java.png": "5591fd9e7826533401b44dd236a49de1",
"assets/assets/icons/linkedin.png": "fd0d5546fdbdc85c76c4372a0d51f1bc",
"assets/assets/icons/linux.png": "fe83f1c5f88631350159acd03b10ab10",
"assets/assets/icons/medal.png": "39d8f8fed238313272faefe468e79f72",
"assets/assets/icons/mongodb.png": "2466b513082d9094382bd88e598ab2af",
"assets/assets/icons/project.png": "217d1aa9f4ec01784e631fec1c3dbad9",
"assets/assets/icons/python.png": "4e2fa813521506fefd0113bbd326f02e",
"assets/assets/icons/skills.png": "0c93e83b7d20259d609a0214cdf23fb6",
"assets/assets/icons/springBoot.png": "a707005c50050f1571b30372d8088b6f",
"assets/assets/icons/twitter.png": "49c5dfc52d5de40ebe944a39ac98f327",
"assets/assets/images/abstract_bg.jpg": "962bcad862e2c8495f1fffa85df6b15d",
"assets/assets/images/codejam.png": "ae2c056dac3c09efe8fb883070b2eb1b",
"assets/assets/images/coding_school.png": "8c2eb6ef964c0697fffcbee074001f8d",
"assets/assets/images/coursera.png": "c8d2fe52450690cc2e064036a97fbab7",
"assets/assets/images/hello_world.png": "3f591950c50b9714e2ac0219b3f83216",
"assets/assets/images/kickstart.png": "d9b0841b9114b70bc693f6e67ee0c4cd",
"assets/assets/images/sahil_dark.png": "19bf8ac948dcb45f2ac516c27ebf0649",
"assets/assets/images/sahil_light.png": "86d6cfd2954b274273c651ba228cdfc9",
"assets/assets/images/sahil_selfie.jpg": "34aed027c993104dd1226dc4df133a9f",
"assets/assets/images/signature.png": "e0aaaae92f73b4fa39a10a1b8c529013",
"assets/FontManifest.json": "9ec5317423c3d6735eb7d15b828e0663",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "8d4df929893e599bda73ac7b906e3703",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c4a12adbd1e5a4d03a6d82d14348f495",
"/": "c4a12adbd1e5a4d03a6d82d14348f495",
"main.dart.js": "50d3024201fec8e57e8fd5e8d994a69f",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
