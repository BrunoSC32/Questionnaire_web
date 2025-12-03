export const isAuthenticated = (req, res, next) => {
  if (req.session && req.session.user) {
    return next();
  }

  return res.status(401).json({ ok: false, message: "No autenticado" });
};

export const hasRole = (...rolesPermitidos) => {
  return (req, res, next) => {
    if (!req.session || !req.session.user) {
      return res.status(401).json({ ok: false, message: "No autenticado" });
    }

    const { rol } = req.session.user;

    if (!rolesPermitidos.includes(rol)) {
      return res.status(403).json({ ok: false, message: "No autorizado" });
    }

    return next();
  };
};

export default {
  isAuthenticated,
  hasRole,
};

