import Section from "../../components/Section";
import Header from "../../components/Header";

const AdaptAndImprove = () => {
  return (
    <>
      <Header />
      <Section
        id="careers"
        className="pt-[12rem] -mt-[5.25rem]"
        crosses
        crossesOffset="lg:translate-y-[5.25rem]"
        customPaddings
      >
        <div className="container">
          <h2 className="h2 mb-8">Careers at Ainexim</h2>
        </div>
      </Section>
    </>
  );
};

export default AdaptAndImprove;
