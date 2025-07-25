import { useContext, useEffect, useState } from "react";
import {
  getLessonCollectionsService,
  createLessonCollectionService,
  updateLessonCollectionService,
} from "../../services/collections.service";
import Dashboardtitle from "../dashboard-title/dashboard-title";
import { CreateLesson, SelectAndCreateLesson } from "../lessons/lessons-styled";
import { Notification } from "../notifications-box/notifications-box";
import { useNotification } from "../notifications-box/useNotification";
import {
  DeleteButton,
  EditButton,
  InfoTable,
  Table,
} from "../users/users-styled";
import {
  CreateLessonCollection,
  LanguageCollectionsProps,
} from "../../util/interfaces/collection-interface";
import { UserContext } from "../../context/user-context";

const LessonCollections = () => {
  const [collections, setCollections] = useState<LanguageCollectionsProps[]>(
    [],
  );
  const [showModal, setShowModal] = useState<boolean>(false);
  const [newCollection, setNewCollection] = useState<CreateLessonCollection>({
    userId: "",
    collectionName: "",
    status: false,
  });
  const [editMode, setEditMode] = useState<boolean>(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [status, setStatus] = useState<string>("TRUE");
  const userContext = useContext(UserContext);
  const { message, type, showNotification, hideNotification } =
    useNotification();

  const getAllLessonsConllections = async () => {
    try {
      const response = await getLessonCollectionsService();
      setCollections(response.data);
    } catch (error: any) {
      showNotification(
        error.response?.data.Message || "Erro ao buscar collections",
        "error",
      );
    }
  };

  useEffect(() => {
    getAllLessonsConllections();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewCollection({ ...newCollection, collectionName: e.target.value });
  };

  const handleSave = async () => {
    if (!userContext?.user.userId) {
      showNotification("Usuário não encontrado", "error");
      return;
    }

    try {
      const collectionToSend = {
        ...newCollection,
        status: status === "TRUE",
      };

      if (editMode && editingId) {
        await updateLessonCollectionService(
          editingId,
          userContext?.user.userId,
          {
            id: editingId,
            languageName: newCollection.collectionName,
            status: collectionToSend.status,
          },
        );
        showNotification("Coleção atualizada com sucesso!", "success");
      } else {
        await createLessonCollectionService(
          userContext?.user.userId,
          newCollection.collectionName,
        );
        showNotification("Coleção criada com sucesso!", "success");
      }

      setShowModal(false);
      setEditMode(false);
      setEditingId(null);
      setNewCollection({ userId: "", collectionName: "", status: true });
      setStatus("TRUE");
      getAllLessonsConllections();
    } catch (error: any) {
      showNotification(
        error.response?.data.Message || "Erro ao salvar coleção",
        "error",
      );
    }
  };

  const handleEdit = (collection: LanguageCollectionsProps) => {
    setEditMode(true);
    setEditingId(collection.id);
    setNewCollection({
      userId: "",
      collectionName: collection.languageName,
      status: collection.status,
    });
    setStatus(collection.status ? "TRUE" : "FALSE");
    setShowModal(true);
  };

  return (
    <>
      <Table>
        <Dashboardtitle sectionTitle="Aulas collection" />
        <SelectAndCreateLesson>
          <CreateLesson
            type="button"
            onClick={() => {
              setShowModal(true);
              setEditMode(false);
              setNewCollection({
                userId: "",
                collectionName: "",
                status: true,
              });
              setStatus("TRUE");
            }}
          >
            <i className="fa-solid fa-book-bookmark"></i> New
          </CreateLesson>
        </SelectAndCreateLesson>
        <InfoTable>
          <thead>
            <tr>
              <th>ID</th>
              <th>Language</th>
              <th>Status</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {collections.map((collection, index) => (
              <tr key={index}>
                <td>{collection.id}</td>
                <td>{collection.languageName}</td>
                <td>{collection.status ? "TRUE" : "FALSE"}</td>
                <td>
                  <EditButton onClick={() => handleEdit(collection)}>
                    <i className="fa-solid fa-pen"></i>
                  </EditButton>
                </td>
              </tr>
            ))}
          </tbody>
        </InfoTable>
      </Table>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>{editMode ? "Editar Collection" : "Nova Collection"}</h2>
            <input
              type="text"
              name="Idioma"
              placeholder="Idioma"
              value={newCollection.collectionName}
              onChange={handleChange}
            />
            {editMode ? (
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="">Select</option>
                <option value="TRUE">TRUE</option>
                <option value="FALSE">FALSE</option>
              </select>
            ) : (
              ""
            )}

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
    </>
  );
};

export default LessonCollections;
