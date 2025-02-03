import { notification1 } from "../assets";

const Notification = ({ className, title }) => {
  return (
    <div
      className={`${
        className || ""
      } flex items-center p-4 pr-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5`}
    >
      <img src={notification1} width={45} height={45} alt="image" />

      <div className="flex-1">
        <p className="mb-1 font-semibold text-base">{title}</p>

        <div className="flex items-center justify-between">
          <div className="body-2 text-n-3">1m ago</div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
