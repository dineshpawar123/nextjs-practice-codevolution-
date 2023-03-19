import React from 'react'


function Home(props) {
    const {users} = props;

  return (
    <div>
        get staticProps...<br/>
        
        1.staticProps only run on serverside<br/>
        2.function will never run client side<br/>
        3.the code u written in getstatic props won't even be included in js bundle that is send to the browser.<br/>
        4. we can write serverside code in getstatic props<br/>
        5.accessing the file in fs module and querying the database can be done inside getStaticProps<br/>
        6. you also dont have to worry about including api keys in get static props as that wont make it to the browser<br/>
        7.only run in page  ,not in component<br/>
        8.use for prerendering not for client side data fetching<br/>
        9.getstatic props should return an object and object should contains a prop key which is an object<br/>
        10.getstatic props run at build time<br/>
        11.in development getstatic props run on every request when you run yarn dev and if we change the code every minute and
         that changes are logical then nextjs run for every request <br/>   

        12.Link prefetching: Any Link component through the viewport (initially or through scroll )will be prfetch by default (including the corresponding data ) 
         for pages using static generation     <br/>

        13.static generation is a method of prerendering where html pages are generated at build time<br/>
        14.with and without external data<br/>
        15.HTML ,json and js file generated<br/>
        16.if you navigate to the page route from a different route , the page is created client side using the js and json prefetch from the server<br/>
        17.path return by getStaticPath will be render to html at build time by getstaticprops<br/>
        18. if fallback set to false ,then any path not return by getStaticPath will result in a 404 page <br/>

        19.fallback false value is suitable if you have an application with small no paths to prerender .
        when new pages are not added often<br/>
        A blog site with few artical is a good example for fallback set to false<br/>

        20. in case of fallback true: the path that have not been generated at build time wiil not result in 404 page .instead nextjs will serve  a "fallback"  version of the page 
        page on a first request to such path<br/>
        -in background Nextjs will statically generate the requested path HTML and json this includes running getStatic props.<br/>
        21.when that done ,  the browser receives the json for generated path. this will use to automatically generate the page with required props. from the user
         perspective , page will be swapped from the fallback page to full page.<br/>
        22. At the same time ,Nextjs keeps track of the new list of pre-render pages. subsequent request to the same path will serve the
         generated page, just like other pages pre-render at build time.<br/>

        23.    getStaticPaths fallback:true<br/>
        -when?<br/>
        -true value is most suitable if your app has large number of static pages that depends on data.<br/>
        -A large e-commerce site<br/>
        -you want all the  product pages to be pre-rendered but if you few thousand products ,build can take very long time<br/>
        -you may statically generate a small subset of products that are popular and use fallback:true for the result<br/>
        -when some on render the page thats not generate yet ,the use will see the page with loading indicator.<br/>
        -shortly after ,getStaticProps finished and the page will be rendered with the requested data .from then onwards,everyone who requested <br/>
        the same page will get the statically pre-rendered page .<br/>
        -this ensures that users always have a fast experience while preserving fast builds and the benefits of static generation<br/>
        
        getStaticPaths fallback :'blocking'
        24.The path return from getStaticPath will be rendered to html at build time by getStaticProps .<br/>
        25.the path <br/>
        26.the path that not have been generated at build time will not result in 404 page .instead ,on the first request nextjs will render
         the page on the server and return the generated html <br/>
         -when thats done ,the browser  receive the html for the generated path .from the user perspective , it will transition from "the browser is 
         requesting the page " to "the full pages is loaded" .there is no flash of loading/fallback state <br/>
         -At the same time , nextjs keeps the track of new list of prerender pages .subsequent request to the same path will serve the generated page ,
         just like other pages pre-render at build time. <br/>
        27. getStaticPaths fallback 'blocking' <br/>
        on a UX level ,sometimes ,people prefer the page to be loaded without loading indicator if the wait time is few milli second .this helps avoid the layout shift<br/>
        28.some crawlers did not support Javascript .the loading page would be loaded which was causing a problem
        <br/><br/>
        29.static generation is a method of prerendering where the HTML pages are generated at build time.
        the pre-rendered static pages can be pushed to a CDN , cached and serve to clientsacross the globe 
        almost instantly 
        30.Static content is fast and better for SEO as they are immediately indexed by search engines
        31.static generation with getStaticPropsfor data fetching and getStaticPaths for dynamic pages 
        seems like a really good approach to a wide variety of applications in production
        Issues: build time is proportional to the number of pages in the application.<br/>
        -
        32.A page ,once generated, can contain stale data till the time you rebuild the application
        <br/><br/>
        <h1>-Issue with build time:</h1>
        -The build time is proportional to the number of pages in the application.

        -A page takes 100ms to build.
        E-commerce app with 100 products takes 10 second to build.<br/>
        E-commerce app with 100,000 products takes greater than 2.5 hours to build.<br/>
        Its not just the time, there are cost implication as well.<br/>
        The problems only gets worse with more products you add to the system as every 
        new page increase the overall build time<br/><br/>
        <h1>Issue with stale data</h1><br/>
        what if we build the app only once in a while?<br/>
        depending on the nature of your application, you might  run into the issue  of the stale data.
        E-commerce app is  not an application which you can build and deploy once in a while, product details ,
        especially product prices can vary everyday.<br/>
        the entire app has to be re-built and the page with updated data will be statically generated.<br/><br/>
        what about getStaticPaths ? <br/>
        pre-render only few pages at build time and rest of the pages can be pre-rendered on request<br/>
        if your appplication has 90% static pages and 10% dynamic pages ,getstaticPaths will not help much
        <br/>
        An e-commerce site typically will have 90% dynamic pages and 10% static pages.so we can reduce
         the total build time by using getStaticPaths
         <br/>
         It still does not fix issue of stale data
         <br/>
         if you render 1000 pages at build time, then the rest are generated based on incomming request, using falllback true or fallback 'blocking', changes in the data will not update the already pre-rendered pages
         <br/>
         <h1>Incremental static regeneration (ISR)</h1>
         <h4>- There was a need to update only those pages which needed a change without having to rebuild the entire app</h4>
         <div>
         -   Incremental Static Regeneration (ISR)
         </div>
         <div>
       -   with ISR ,Nextjs allows  you to update static pages after you have build your application 
         </div>
         <div>
         -   You can statically generate individual pages without needing to rebuild the entire
            site, effectively solving the issue of dealing with stale data
         </div>
         <div>
          -  You can statically generate individual pages without needing to rebuild the entire
            site, effectively solving the issue of dealing with stale data
         </div>
         <div>
            How ??? 
            <br/><br/>
            -In the getStaticProps function, apart from the props key , we can specify a <b>revalidate</b> key 
            <div>
              -  The value for revalidate is the number of second after which a page re-generation can occure
            </div>
         </div>
         <div>
            - Re-generation : A re-generation is initiated only if a user makes a request after the revalidation time
            -if user visit the product details page but there is no other userhitting that page the entire day,
            the regeneration does not happen 
            -revalidate does not mean the page automatically re-generated every 10 second
            -it simply denotes the time after which ,if user makes a request ,a regeneration has to be initiated-
            -regeneration can also fail and the previously cached Html could be served till the subsequent re-generation succeed.


         </div>
         <h1>Two forms of pre-rendering</h1>
         1.static generation<br/>
         the HTML IS statically generated at build time .
          the build page is then cached and reused for each request
          <br/>for a dynamic page with getStaticPaths and fallback set to true the page is not
           generated at build time but is generated on the initial request
           <br/>
           with incremental static regeneration,a page can be regenerated for a request after 
           the revalidation time has elapsed.
           <br/>
           for the most part, the pages are generated using getStaticProps when u build the project
            
         
         <br/>
         2.server side rendering















        <div>{users.map((data)=>{
            return<div>
                <li>{data.id}</li>
                <li>{data.name}</li>
            </div>
        })}</div>
    </div>
  )
}

export default Home

export async function getStaticProps(){
    const response = await  fetch('http://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data);

    return{
        props:{
            users:data,
        }
    }
}