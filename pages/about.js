import Test from "@/components/Test";

export const metadata = {
  title: "About page",
};

function about() {
  return (
    <>
      <h1>About me</h1>
      <p>This is about page</p>
      <div className="mt-5">
        <h3>Test component</h3>
        <p>useState metodu kullanarak basit bir toogle ornegi:</p>
        <Test />
      </div>
    </>
  );
}
export default about;
