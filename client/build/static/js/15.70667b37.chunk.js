(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[15],{124:function(e,t,a){"use strict";a.d(t,"b",(function(){return m})),a.d(t,"c",(function(){return b})),a.d(t,"a",(function(){return y})),a.d(t,"d",(function(){return g})),a.d(t,"e",(function(){return v}));var n=a(50),o=a(46),r=a.n(o),i=(a(53),a(33).default),s=a(10),h=s.FETCH_POST_SUCCESS,d=s.FETCH_POST_FAILURE,l=s.INFO,c=s.FETCH_PROFILE_POST_SUCCESS,u=s.FETCH_PROFILE_POST_FAILURE,f=s.FETCH_A_POST_SUCCESS,p=(s.FETCH_A_POST_FAILURE,s.ERROR),w=s.UPDATE_POST_VIA_SOCKET,m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(){var t=Object(n.a)(r.a.mark((function t(a){var n,o,s,c,u;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("/post/fetchHomepagePosts?skip="+e);case 2:return n=t.sent,o=n.data,t.next=6,o;case 6:s=t.sent,c=s.success,u=s.details,t.t0=c,t.next=!0===t.t0?12:!1===t.t0?13:14;break;case 12:return t.abrupt("return",a({type:h,payload:u}));case 13:return t.abrupt("return",a({type:d}));case 14:return t.abrupt("return",a({type:l,payload:"Something went wrong while fetching the posts."}));case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(e){var t=e.skip,a=e.profile;return function(){var e=Object(n.a)(r.a.mark((function e(n){var o,s,h,d,f;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/post/fetchProfilePosts",{params:{skip:t,profile:a}});case 2:return o=e.sent,s=o.data,e.next=6,s;case 6:h=e.sent,d=h.success,f=h.details,e.t0=d,e.next=!0===e.t0?12:!1===e.t0?13:14;break;case 12:return e.abrupt("return",n({type:c,payload:f}));case 13:return e.abrupt("return",n({type:u}));case 14:return e.abrupt("return",n({type:l,payload:"Something went wrong while fetching the posts."}));case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},y=function(e){return function(){var t=Object(n.a)(r.a.mark((function t(a){var n,o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.get("/post/fetch?id=".concat(e));case 3:n=t.sent,o=n.data,t.t0=o.success,t.next=!0===t.t0?8:!1===t.t0?9:10;break;case 8:return t.abrupt("return",a({type:f,payload:o.details}));case 9:return t.abrupt("return",a({type:d,payload:o.details}));case 10:return t.abrupt("return",a({type:p,payload:"Something went wrong while fetching the post."}));case 11:t.next=16;break;case 13:t.prev=13,t.t1=t.catch(0),a({type:p,payload:"Something went wrong while fetching the post."});case 16:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(n.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.post("/post/like",{postId:e});case 2:n=t.sent,n.data;case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return{type:w,payload:e}}},149:function(e,t,a){},211:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return g}));var n=a(38),o=a(27),r=a(1),i=a.n(r),s=a(51),h=(a(149),a(54)),d=a(47),l=a.p+"static/media/featured.d294b894.jpg",c=a(16),u=a(168),f=a(5),p=a(124),w=a(150),m=a.n(w),b=a(2),y=i.a.lazy((function(){return a.e(29).then(a.bind(null,372))}));function g(e){e.title,e.body,e.category;var t=e.preview,a=void 0!==t&&t,i=Object(c.c)((function(e){return e.common})).dark,w=Object(f.i)().id,g=Object(c.b)(),v=Object(c.c)((function(e){return e.post.visitedPosts.filter((function(e){return e._id===w}))})),k=Object(n.a)(v,1)[0];return Object(r.useEffect)((function(){v.some((function(e){return e._id===w}))||g(Object(p.a)(w))}),[]),Object(b.jsx)("div",{className:Object(o.a)("post py-4 px-1 p-md-4",i?"post_dark":"post_light",a&&"border"),children:Object(b.jsxs)("div",{className:"container ",children:[Object(b.jsxs)("article",{children:[Object(b.jsxs)("div",{className:Object(o.a)("title-bar row align-items-start "),children:[Object(b.jsx)("div",{className:"col-10  title-row",children:Object(b.jsx)("h1",{className:"post-title",children:k?k.title:"Post title goes here..."})}),Object(b.jsx)("div",{className:"options-button col-2   text-end p-0 px-sm-4",children:Object(b.jsx)(h.b,{})})]}),Object(b.jsxs)("div",{className:"info-row mb-3",children:[Object(b.jsxs)("span",{className:"author-col",children:["Article by ",Object(b.jsx)("b",{children:k?k.author.authorName:"Author name"})]}),"\xa0 \u2022 \xa0 Published on"," ",k?m()(k.createdAt).format("LLL"):"Time"," \xa0 \u2022 \xa0 ",k?k.category:"Undefined"]}),Object(b.jsx)("div",{className:"featured-image",children:Object(b.jsx)("img",{src:l,className:"",alt:"Featured"})}),Object(b.jsx)("div",{className:"post-body",children:k?Object(u.a)(k.content):Object(b.jsx)("p",{children:"There were only two ways to get out of this mess if they all worked together. The problem was that neither was all that appealing. One would likely cause everyone a huge amount of physical pain while the other would likely end up with everyone in jail. In Sam's mind, there was only one thing to do. He threw everyone else under the bus and he secretly sprinted away leaving the others to take the fall without him. The shoes had been there for as long as anyone could remember. In fact, it was difficult for anyone to come up with a date they had first appeared. It had seemed they'd always been there and yet they seemed so out of place. Why nobody had removed them was a question that had been asked time and again, but while they all thought it, nobody had ever found the energy to actually do it. So, the shoes remained on the steps, out of place in one sense, but perfectly normal in another. Things aren't going well at all with mom today. She is just a limp noodle and wants to sleep all the time. I sure hope that things get better soon. Dragons don't exist they said. They are the stuff of legend and people's imagination. Greg would have agreed with this assessment without a second thought 24 hours ago. But now that there was a dragon staring directly into his eyes, he questioned everything that he had been told. They argue. While the argument seems to be different the truth is it's always the same. Yes, the topic may be different or the circumstances, but when all said and done, it all came back to the same thing. They both knew it, but neither has the courage or strength to address the underlying issue. So they continue to argue. All he wanted was a candy bar. It didn't seem like a difficult request to comprehend, but the clerk remained frozen and didn't seem to want to honor the request. It might have had something to do with the gun pointed at his face. \u201cIngredients for life,\u201d said the backside of the truck. They mean food, but really food is only 1 ingredient of life. Life has so many more ingredients such as pain, happiness, laughter, joy, tears, and smiles. Life also has hard work, easy play, sleepless nights, and sunbathing by the ocean. Love, hatred, envy, self-assurance, and fear could be just down aisle 3 ready to be bought when needed. How I wish I could pull ingredients like these off shelves in a store. He read about a hike called the incline in the guidebook. It said it was a strenuous hike and to bring plenty of water. \u201cA beautiful hike to the clouds\u201d described one review. \u201cNot for the faint-hearted,\u201d said another. \u201cNot too bad of a workout\u201d, bragged a third review. I thought I\u2019d hike it when I fly in from Maryland on my day off from the senior citizen's wellness conference. I hiked 2 miles a day around the neighborhood so I could handle a 1.1-mile hike. What a foolish mistake that was for a 70-year-old low-lander. The chair sat in the corner where it had been for over 25 years. The only difference was there was someone actually sitting in it. How long had it been since someone had done that? Ten years or more he imagined. Yet there was no denying the presence in the chair now. You know that tingly feeling you get on the back of your neck sometimes? I just got that feeling when talking with her. You know I don't believe in sixth senses, but there is something not right with her. I don't know how I know, but I just do. \"It was so great to hear from you today and it was such weird timing,\" he said. \"This is going to sound funny and a little strange, but you were in a dream I had just a couple of days ago. I'd love to get together and tell you about it if you're up for a cup of coffee,\" he continued, laying the trap he'd been planning for years. The river slowly meandered through the open space. It had hidden secrets that it didn't want to reveal. It had a well-planned strategy to appear calm, inviting, and appealing. That's how the river lured her unknowing victims to her water's edge. He knew what he was supposed to do. That had been apparent from the beginning. That was what made the choice so difficult. What he was supposed to do and what he would do were not the same. This would have been fine if he were willing to face the inevitable consequences, but he wasn't. The headache wouldn't go away. She's taken medicine but even that didn't help. The monstrous throbbing in her head continued. She had this happen to her only once before in her life and she realized that only one thing could be happening. He slowly poured the drink over a large chunk of ice he has especially chiseled off a larger block. He didn't particularly like his drinks cold, but he knew that the drama of chiseling the ice and then pouring a drink over it looked far more impressive than how he actually liked it. It was all about image and he'd managed to perfect the image that he wanted to project. They had always called it the green river. It made sense. The river was green. The river likely had a different official name, but to everyone in town, it was and had always been the green river. So it was with great surprise that on this day the green river was a fluorescent pink. You're going to make a choice today that will have a direct impact on where you are five years from now. The truth is, you'll make choice like that every day of your life. The problem is that on most days, you won't know the choice you make will have such a huge impact on your life in the future. So if you want to end up in a certain place in the future, you need to be careful of the choices you make today. Dave watched as the forest burned up on the hill, only a few miles from her house. The car had been hastily packed and Marta was inside trying to round up the last of the pets. Dave went through his mental list of the most important papers and documents that they couldn't leave behind. He scolded himself for not having prepared these better in advance and hoped that he had remembered everything that was needed. He continued to wait for Marta to appear with the pets, but she still was nowhere to be seen. He swung back the fishing pole and cast the line which ell 25 feet away into the river. The lure landed in the perfect spot and he was sure he would soon get a bite. He never expected that the bite would come from behind in the form of a bear. Then came the night of the first falling star. It was seen early in the morning, rushing over Winchester eastward, a line of flame high in the atmosphere. Hundreds must have seen it and taken it for an ordinary falling star. It seemed that it fell to earth about one hundred miles east of him. After hunting for several hours, we finally saw a large seal sunning itself on a flat rock. I took one of the wooden clubs while Larry took the longer one. We slowly snuck up behind the seal until we were close enough to club it over its head. The seal slumped over and died. This seal would help us survive. We could eat the meat and fat. The fat could be burned in a shell for light and the fur could be used to make a blanket. We declared our first day of hunting a great success. One can cook on and with an open fire. These are some of the ways to cook with fire outside. Cooking meat using a spit is a great way to evenly cook meat. In order to keep meat from burning, it's best to slowly rotate it. Hot stones can be used to toast bread. Coals are hot and can bring things to a boil quickly. If one is very adventurous, one can make a hole in the ground, fill it with coals and place foil-covered meat, veggies, and potatoes into the coals, and cover all of it with dirt. In a short period of time, the food will be baked. Campfire cooking can be done in many ways. There was no time. He ran out of the door without half the stuff he needed for work, but it didn't matter. He was late and if he didn't make this meeting on time, someone's life may be in danger. \"It doesn't take much to touch someone's heart,\" Daisy said with a smile on her face. \"It's often just the little things you do that can change a person's day for the better.\" Daisy truly believed this to be the way the world worked, but she didn't understand that she was merely a robot that had been programmed to believe this. The headphones were on. They had been utilized on purpose. She could hear her mom yelling in the background, but couldn't make out exactly what the yelling was about. That was exactly why she had put them on. She knew her mom would enter her room at any minute, and she could pretend that she hadn't heard any of the previous yelling. Barbara had been waiting at the table for twenty minutes. it had been twenty long and excruciating minutes. David had promised that he would be on time today. He never was, but he had promised this one time. She had made him repeat the promise multiple times over the last week until she'd believed his promise. Now she was paying the price. She was in a hurry. Not the standard hurry when you're in a rush to get someplace, but a frantic hurry. The type of hurry where a few seconds could mean life or death. She raced down the road ignoring speed limits and weaving between cars. She was only a few minutes away when traffic came to a dead standstill on the road ahead. I don\u2019t like cats and they don\u2019t like me. I used to be allergic to them and I would get stuffed up and have hives. That doesn\u2019t seem to happen anymore. But I still don\u2019t like them. I lived with 3 cats that were not good at peeing in the litter box. They seemed to find something important to me and pee on it. Most of the time they peed on photographs or papers that would be ruined. Cats also bring fleas into the house. There is nothing worse than having to flea dip cats and also flea bomb a home. That is why I don\u2019t like cats."})})]}),Object(b.jsxs)("div",{className:"interaction-row",children:[Object(b.jsxs)("span",{className:"interaction-btn like",children:[Object(b.jsx)(d.i,{}),Object(b.jsx)("span",{children:"237"})]}),Object(b.jsxs)("span",{className:"interaction-btn comment",children:[Object(b.jsx)(d.e,{}),Object(b.jsx)("span",{children:"237"})]}),Object(b.jsx)("span",{className:"interaction-btn share",children:Object(b.jsx)(d.f,{})})]}),a?null:Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("br",{}),Object(b.jsx)(r.Suspense,{fallback:Object(b.jsx)(s.a,{}),children:Object(b.jsx)(y,{})})]})]})})}}}]);
//# sourceMappingURL=15.70667b37.chunk.js.map