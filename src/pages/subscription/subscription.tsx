import { useEffect, useState } from "react";
import SubscriptionCard from "../../components/subscription-card/subscription-card";
import WhiteHeader from "../../components/white-header/white-header";
import { getAllPlansService } from "../../services/plans.service";
import "./subscription.scss";
import Footer from "../../components/footer/footer";

interface Plan {
  id: string;
  planId: string;
  title: string;
  description: string;
  value: number;
  advantages: string[];
}

const Subscription = () => {
  const [plans, setPlans] = useState<Plan[]>([]);

  const getAllPlans = async () => {
    try {
      const response = await getAllPlansService();
      console.log(response.data);
      setPlans(response.data);
    } catch (error) {
      console.error("Error fetching plans:", error);
    }
  };

  useEffect(() => {
    getAllPlans();
  }, []);

  return (
    <>
      <WhiteHeader />
      <div className="sub">
        <h1>Escolha o plano ideal para você</h1>

        <section>
          {plans.map((plan) => (
            <SubscriptionCard
              key={plan.id}
              planId={plan.planId}
              title={plan.title}
              value={plan.value}
              description={plan.description}
              advantages={plan.advantages}
            />
          ))}
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Subscription;
