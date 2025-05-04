import PlansCard from "../plans-card/plans-card";
import "./plans.scss";

const Plans = () => {
  return (
    <div>
      <h1></h1>
      <section className="plans-card-area">
        <PlansCard
          id="312312312rfgeg533"
          title="Plano Premium"
          description="Descrição do plano.."
          value={35}
          advantages={[
            "Suporte 24/7",
            "Acesso a todos os cursos",
            "Downloads ilimitados",
          ]}
        />

        <PlansCard
          id="312312312rfgeg533"
          title="Plano Premium"
          description="Descrição do plano.."
          value={35}
          advantages={[
            "Suporte 24/7",
            "Acesso a todos os cursos",
            "Downloads ilimitados",
          ]}
        />

        <PlansCard
          id="312312312rfgeg533"
          title="Plano Premium"
          description="Descrição do plano.."
          value={35}
          advantages={[
            "Suporte 24/7",
            "Acesso a todos os cursos",
            "Downloads ilimitados",
          ]}
        />
      </section>
    </div>
  );
};

export default Plans;

// "title": "Plano Premium",
//   "description": "Descrição do plano...",
//   "value": 35.00,
//   "advantages": ["Vantagem 1", "Vantagem 2"]
//
