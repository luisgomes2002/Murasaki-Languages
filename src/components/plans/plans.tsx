import { useContext, useEffect, useState } from "react";
import {
  createPlanService,
  deletePlanService,
  getAllPlansService,
  updatePlanService,
} from "../../services/plans.service";
import Dashboardtitle from "../dashboard-title/dashboard-title";
import {
  DeleteButton,
  EditButton,
  InfoTable,
  Table,
} from "../users/users-styled";
import "./plans.scss";
import { CreateLesson, SelectAndCreateLesson } from "../lessons/lessons-styled";
import { useNotification } from "../notifications-box/useNotification";
import { Notification } from "../notifications-box/notifications-box";
import { CreatePlan, PlansProps } from "../../util/interfaces/plans-interface";
import { UserContext } from "../../context/user-context";
import DeletePopup from "../delete-popup/delete-popup";

const Plans = () => {
  const [plans, setPlans] = useState<PlansProps[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [newPlan, setNewPlan] = useState<CreatePlan>({
    title: "",
    description: "",
    value: 0,
    advantages: [],
    link: "",
  });
  const [editMode, setEditMode] = useState<boolean>(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const { message, type, showNotification, hideNotification } =
    useNotification();
  const userContext = useContext(UserContext);
  const [planToDelete, setPlanToDelete] = useState<PlansProps | null>(null);

  const allPlans = async () => {
    try {
      const response = await getAllPlansService();
      setPlans(response.data);
      showNotification(response.data.Message, "success");
    } catch (error: any) {
      showNotification(error.response?.data.Message, "error");
    }
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
    if (!userContext?.user.userId) {
      showNotification("Usuário não encontrado", "error");
      return;
    }

    if (editMode && editingId) {
      try {
        const response = await updatePlanService(
          editingId,
          userContext?.user.userId,
          newPlan,
        );
        showNotification(response.data.Message, "success");
      } catch (error: any) {
        showNotification(error.response?.data?.Message, "error");
      }
    } else {
      try {
        const response = await createPlanService(
          newPlan,
          userContext?.user.userId,
        );
        showNotification(response.data.Message, "success");
      } catch (error: any) {
        showNotification(error.response?.data?.Message, "error");
      }
    }

    setShowModal(false);
    setEditMode(false);
    setEditingId(null);
    await allPlans();
  };

  const handleDeletePlan = async () => {
    if (!planToDelete || !userContext?.user.userId) return;

    try {
      const response = await deletePlanService(
        planToDelete.id,
        userContext.user.userId,
      );
      showNotification(response.data.Message, "success");
    } catch (error: any) {
      showNotification(error.response?.data?.Message, "error");
    }

    setPlanToDelete(null);
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
                  <DeleteButton onClick={() => setPlanToDelete(plan)}>
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

      {message && (
        <Notification
          message={message}
          type={type}
          onClose={hideNotification}
        />
      )}

      {planToDelete && (
        <DeletePopup
          title="Confirmar exclusão"
          description="Tem certeza que deseja excluir este plano? Essa ação não poderá ser desfeita."
          onConfirm={handleDeletePlan}
          onCancel={() => setPlanToDelete(null)}
          confirmText="Excluir"
          cancelText="Cancelar"
        />
      )}
    </>
  );
};

export default Plans;
