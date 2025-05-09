// src/components/HowItWorks.jsx
import React from "react";
import {
  MdCloudUpload,
  MdAttachMoney,
  MdAccountBalanceWallet,
} from "react-icons/md";

const HowItWorks = () => (
  <section className="how-section">
    <h2 className="how-title">How It Works</h2>
    <div className="how-steps-container">
      <div className="how-step">
        <MdCloudUpload className="how-icon light-blue" />
        <h3 className="how-step-title">Upload License</h3>
        <p className="how-step-description">
          Upload your unused software license details quickly and securely.
        </p>
      </div>
      <div className="how-step">
        <MdAttachMoney className="how-icon light-orange" />
        <h3 className="how-step-title">Get Valuation</h3>
        <p className="how-step-description">
          We analyze and provide a fair market valuation for your license.
        </p>
      </div>
      <div className="how-step">
        <MdAccountBalanceWallet className="how-icon light-blue" />
        <h3 className="how-step-title">Get Paid</h3>
        <p className="how-step-description">
          Receive fast, safe payment directly to your wallet or account.
        </p>
      </div>
    </div>
  </section>
);

export default HowItWorks;
