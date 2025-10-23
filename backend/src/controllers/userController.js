import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/users.js";

const JWT_SECRET = process.env.JWT_SECRET;

export async function registerUser(req, res) {
    const { username, email, password } = req.body;

        // Verifica se usuário já existe
        if (Use.find(u => u.email === email)) {
        return res.status(400).json({ message: "Usuário já existe" });
        }

        // Criptografa a senha
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = { id: Use.length + 1, username, email, password: hashedPassword };
        Use.push(newUser);

        res.status(201).json({ message: "Usuário registrado com sucesso" });
}

export async function userLogin(req, res) {
    const { email, password } = req.body;

    const user = Use.find(u => u.email === email);
    if (!user) {
        return res.status(400).json({ message: "Credenciais inválidas" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(400).json({ message: "Credenciais inválidas" });
    }

    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({ token });
}
