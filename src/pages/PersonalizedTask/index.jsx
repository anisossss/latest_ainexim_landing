import Section from "../../components/Section";
import Header from "../../components/Header";

const PersonalizedTask = () => {
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
        <div className="container"></div>
      </Section>
    </>
  );
};

export default PersonalizedTask;
