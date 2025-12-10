let users = [
  {
    id: "b42f53fa-7b30-4b91-8d36-dc1c6ef27611",
    name: "estiven",
    email: "estivegarcia@example.com",
    role: "admin",
    createdAt: "2025-07-12T12:00:00.000Z",
  },
  {
    id: "b42f53fa-7b30-4b91-8d36-dc1c6ef27612",
    name: "ana",
    email: "ana1956@example.com",
    role: "admin",
    createdAt: "2025-07-12T12:00:00.000Z",
  },
  {
    id: "b42f53fa-7b30-4b91-8d36-dc1c6ef27613",
    name: "zarra",
    email: "zarra@example.com",
    role: "admin",
    createdAt: "2025-07-12T12:00:00.000Z",
  },
  {
    id: "b42f53fa-7b30-4b91-8d36-dc1c6ef27614",
    name: "carlos",
    email: "carlos545s@example.com",
    role: "admin",
    createdAt: "2025-07-12T12:00:00.000Z",
  }
];

exports.getAllUsers = (req, res) => {
  res.status(200).json(users);
};

exports.getUserById = (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);
  if (!user) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }
  res.status(200).json(user);
};