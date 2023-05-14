import Feed from "@components/Feed";

const Home = () => {
   return (
      <section className="w-full flex-center flex-col">
         <h1 className="head_text text-center">
            Find & Share
            <br className="max:md:hidden" />
            <span className="orange_gradient">AI-powered F-Form</span>
         </h1>
         <p className="desc text-center">
            F-Form is an open-source AI prompting tool for modern world to
            discover, create and share creative F-Form
         </p>

         {/* Feed */}
         <Feed />
      </section>
   );
};

export default Home;
