
import SuccessMessage from "./SuccessMessage";

const PaymentSuccess = () => {
  
  return (
    <div className="max-w-7xl m-auto px-2">
      <div class="card w-full bg-base-400 border my-5">
        <div class="py-8 px-2">
          <ul class="progressBar ">
            <li class="active">Shipping</li>
            <li class="active">Order</li>
            <li className="active">Payment</li>
          </ul>
          <div className="mt-20">
            <SuccessMessage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
