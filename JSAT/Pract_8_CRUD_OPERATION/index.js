const express = require("express");

const app = express();
app.use(express.json());

const Proffesion = [
  {
    _id: "1",
    title: "Building Drones",
    desc: "Automobive Drones , Manual Army Drones etc.",
  },
  {
    _id: "2",
    title: "App Developer",
    desc: "Cross Platfrom App Dveloper IOS/Android",
  },
  {
    _id: "3",
    title: "Web Developer",
    desc: "Responsive and Scaleable Website , NEXTJS and REACTJS",
  },
  {
    _id: "4",
    title: "Rocket Science",
    desc: "Desiging Rockets Engine , Aerodynamic Systems",
  },
];

/**
 * ALL
 * GET /profession
 */
app.get("/profession", (req, res) => {
  if (Proffesion.length == 0) {
    return res.status(200).json({
      message: "Empty Professional Carrier",
    });
  }

  const proff = Proffesion;
  return res.status(200).json({
    success: true,
    message: "Fetched Successfully",
    data: proff,
  });
});

/**
 * PERTICULAR
 * GET /profession/:id
 */

app.get("/profession/:id", (req, res) => {
  const { id } = req.params;

  if (Proffesion.length == 0) {
    return res.status(200).json({
      message: "Empty Professional Carrier",
    });
  }

  const newProff = Proffesion.find((p) => p._id === id);
  if (!newProff) {
    return res.status(201).json({
      success: false,
      message: "No Data Found",
    });
  }
  return res.status(200).json({
    success: true,
    message: "Fetched Successfully",
    data: newProff,
  });
});

/**
 * INserting Perticulra
 * POST /profession/
 */
app.post("/profession", (req, res) => {
  const { title, desc } = req.body;
  if (!title || !desc) {
    return res.status(201).json({
      success: false,
      message: "Provide Proper Data",
    });
  }

  const newID = Math.max(...Proffesion.map((p) => p._id || 0)) + 1;

  const payload = {
    _id: newID,
    title: title,
    desc: desc,
  };

  Proffesion.push(payload);

  return res.status(201).json({
    success: true,
    message: "Data Inserted Successfully",
    data: payload,
  });
});

/**
 * UPdating Proper data
 * PUT /profession/
 */

app.put("/profession/:id", (req, res) => {
  const data = req.body;
  const { id } = req.params;

  if (!data) {
    return res.status(404).json({
      success: false,
      message: "Please provide Valid Data",
    });
  }

  const index = Proffesion.findIndex((item) => item._id === id);

  const oldData = Proffesion[index];
  console.log(oldData);

  if (!oldData) {
    return res.status(404).json({
      success: false,
      message: "Please provide Valid id",
    });
  }

  payload = {
    _id: id,
    title: data?.title ? data.title : oldData.title,
    desc: data?.desc ? data.desc : oldData.desc,
  };
  Proffesion[index] = payload;
  console.log(Proffesion[index]);
  console.log(Proffesion);

  return res.status(201).json({
    success: true,
    message: "Updated Successfully",
    data: Proffesion,
  });
});

app.listen(9000, () => {
  console.log("The Sever is Running ");
});
