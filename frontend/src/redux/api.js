const apiUrl = "http://localhost:3001/api/v1/";

// Requête pour l'authentification

export const fetchUserLogin = async (email, password) => {
    try {
        const response = await fetch(`${apiUrl}user/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });

        if (response.status === 400) {
            alert("Bad request: Incorrect email or password");
        }
        if (response.status === 500) {
            alert("Internal server error: Please try again");
        }

        const data = await response.json();
        return data;
    } catch (err) {
        console.error(err);
    }
};

// Requête pour récupérer les données de l'utilisateur connecté

export const fetchUserProfile = async (token) => {
    try {
        const response = await fetch(`${apiUrl}user/profile`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
        const data = await response.json();
        return data;
    } catch (err) {
        console.error(err);
    }
};

// Requête pour modifier le userName dans le profile du user

export const fetchEditUserName = async (token, userName) => {
    try {
        const response = await fetch(`${apiUrl}user/profile`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ userName }),
        });
        const data = await response.json();
        return data;
    } catch (err) {
        console.error(err);
    }
};
