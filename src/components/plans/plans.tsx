import { useEffect, useState } from "react";
import { getAllPlansService } from "../../services/plans.service";
import Dashboardtitle from "../dashboard-title/dashboard-title";
import {
  DeleteButton,
  EditButton,
  InfoTable,
  Table,
} from "../users/users-styled";
import "./plans.scss";
import { CreateLesson, SelectAndCreateLesson } from "../lessons/lessons-styled";
import { PlansProps } from "../../util/interfaces";

const Plans = () => {
  const [plans, setPlans] = useState<PlansProps[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [newPlan, setNewPlan] = useState<Omit<PlansProps, "id">>({
    title: "",
    description: "",
    value: 0,
    advantages: [],
    link: "",
  });
  const [editMode, setEditMode] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const allPlans = async () => {
    const response = await getAllPlansService();
    setPlans(response.data);
  };

  useEffect(() => {
    allPlans();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setNewPlan((prev) => ({
      ...prev,
      [name]: name === "value" ? Number(value) : value,
    }));
  };

  const handleEdit = (plan: PlansProps) => {
    setNewPlan({
      title: plan.title,
      description: plan.description,
      value: plan.value,
      advantages: plan.advantages,
      link: plan.link,
    });
    setEditingId(plan.id);
    setEditMode(true);
    setShowModal(true);
  };

  const handleSave = async () => {
    if (editMode && editingId) {
      // await updatePlanService(editingId, newPlan);
    } else {
      // criar novo plano (adicionar createPlanService aqui, se quiser)
      console.log("Criando plano:", newPlan);
    }

    setShowModal(false);
    setEditMode(false);
    setEditingId(null);
    await allPlans();
  };

  return (
    <>
      <Table>
        <Dashboardtitle sectionTitle="Lista de Aulas" />
        <SelectAndCreateLesson>
          <CreateLesson
            type="button"
            onClick={() => {
              setNewPlan({
                title: "",
                description: "",
                value: 0,
                advantages: [],
                link: "",
              });
              setEditMode(false);
              setEditingId(null);
              setShowModal(true);
            }}
          >
            <i className="fa-solid fa-book-bookmark"></i> New
          </CreateLesson>
        </SelectAndCreateLesson>
        <InfoTable>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Value</th>
              <th>Description</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {plans.map((plan, index) => (
              <tr key={index}>
                <td>{plan.id}</td>
                <td>{plan.title}</td>
                <td>{plan.value}</td>
                <td>{plan.description}</td>
                <td>
                  <EditButton onClick={() => handleEdit(plan)}>
                    <i className="fa-solid fa-pen"></i>
                  </EditButton>
                </td>
                <td>
                  <DeleteButton>
                    <i className="fa-solid fa-trash"></i>
                  </DeleteButton>
                </td>
              </tr>
            ))}
          </tbody>
        </InfoTable>
      </Table>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>{editMode ? "Editar Plano" : "Novo Plano"}</h2>
            <input
              type="text"
              name="title"
              placeholder="Título"
              value={newPlan.title}
              onChange={handleChange}
            />
            <input
              type="number"
              name="value"
              placeholder="Valor"
              value={newPlan.value}
              onChange={handleChange}
            />
            <textarea
              name="description"
              placeholder="Descrição"
              value={newPlan.description}
              onChange={handleChange}
            />
            <input
              type="text"
              name="advantages"
              placeholder="Vantagens (separadas por vírgula)"
              value={newPlan.advantages.join(", ")}
              onChange={(e) =>
                setNewPlan((prev) => ({
                  ...prev,
                  advantages: e.target.value.split(",").map((v) => v.trim()),
                }))
              }
            />
            <input
              type="text"
              name="link"
              placeholder="Link"
              value={newPlan.link}
              onChange={handleChange}
            />
            <div className="modal-buttons">
              <button onClick={handleSave}>
                {editMode ? "Salvar Alterações" : "Salvar"}
              </button>
              <button
                onClick={() => {
                  setShowModal(false);
                  setEditMode(false);
                  setEditingId(null);
                }}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Plans;
