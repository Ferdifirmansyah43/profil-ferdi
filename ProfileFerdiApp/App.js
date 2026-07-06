import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

export default function App() {
  const [page, setPage] = useState("login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    if (username === "23050464" && password === "23050464") {
      setPage("home");
    } else {
      alert("Username atau Password Salah!");
    }
  };

  if (page === "login") {
    return (
      <View style={styles.loginContainer}>
        <Text style={styles.logo}>👨‍💻</Text>

        <Text style={styles.title}>APLIKASI PROFIL</Text>
        <Text style={styles.subTitle}>FERDI FIRMANSYAH</Text>

        <TextInput
          placeholder="Masukkan Username"
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />

        <TextInput
          placeholder="Masukkan Password"
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.loginButton} onPress={login}>
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (page === "home") {
  return (
    <ScrollView contentContainerStyle={styles.homeContainer}>
      <View style={styles.profileCard}>
        <Text style={styles.avatar}>👨‍💻</Text>
        <Text style={styles.name}>Ferdi Firmansyah</Text>
        <Text style={styles.nim}>NIM : 23050464</Text>
      </View>

      <TouchableOpacity
        style={styles.menuCard}
        onPress={() => setPage("biodata")}
      >
        <Text style={styles.menuIcon}>👤</Text>
        <Text style={styles.menuText}>Biodata</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuCard}
        onPress={() => setPage("pendidikan")}
      >
        <Text style={styles.menuIcon}>🎓</Text>
        <Text style={styles.menuText}>Riwayat Pendidikan</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuCard}
        onPress={() => setPage("aktivitas")}
      >
        <Text style={styles.menuIcon}>📅</Text>
        <Text style={styles.menuText}>Aktivitas Harian</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuCard}
        onPress={() => setPage("recipe")}
      >
        <Text style={styles.menuIcon}>🍜</Text>
        <Text style={styles.menuText}>Recipe Favorit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
} // <-- WAJIB ADA INI


    if (page === "biodata") {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>👤 BIODATA</Text>

      <View style={styles.infoCard}>
        <Text style={styles.label}>Nama</Text>
        <Text style={styles.value}>Ferdi Firmansyah</Text>

        <Text style={styles.label}>NIM</Text>
        <Text style={styles.value}>23050464</Text>

        <Text style={styles.label}>Universitas</Text>
        <Text style={styles.value}>Universitas Yatsi Madani</Text>

        <Text style={styles.label}>Fakultas</Text>
        <Text style={styles.value}>Teknologi dan Bisnis</Text>

        <Text style={styles.label}>Program Studi</Text>
        <Text style={styles.value}>Ilmu Komputer</Text>

        <Text style={styles.label}>Jenis Kelamin</Text>
        <Text style={styles.value}>Laki-laki</Text>

        <Text style={styles.label}>Alamat</Text>
        <Text style={styles.value}>
          Kp. Peuteuy Ds. Tobat Kec. Balaraja
        </Text>

        <Text style={styles.label}>Email</Text>
        <Text style={styles.value}>
          ferdi.firmansyah303@gmail.com
        </Text>

        <Text style={styles.label}>No HP</Text>
        <Text style={styles.value}>083186506187</Text>
      </View>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => setPage("home")}
      >
        <Text style={styles.loginButtonText}>Kembali</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
  if (page === "pendidikan") {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.header}>🎓 RIWAYAT PENDIDIKAN</Text>

        <View style={styles.infoCard}>
          <Text style={styles.value}>🏫 SD Negeri Tobat 1</Text>
          <Text style={styles.value}>🏫 SMP Negeri 3 Balaraja</Text>
          <Text style={styles.value}>🏫 SMKS PGRI 1 Balaraja</Text>
          <Text style={styles.value}>🎓 Universitas Yatsi Madani</Text>
        </View>

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => setPage("home")}
        >
          <Text style={styles.loginButtonText}>Kembali</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }

  if (page === "aktivitas") {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.header}>📅 AKTIVITAS HARIAN</Text>

        <View style={styles.infoCard}>
          <Text style={styles.value}>06.00 Bangun Tidur</Text>
          <Text style={styles.value}>07.00 Berangkat Kerja</Text>
          <Text style={styles.value}>08.00 Mulai Kerja</Text>
          <Text style={styles.value}>12.00 Istirahat</Text>
          <Text style={styles.value}>17.00 Pulang Kerja / Berangkat Kampus</Text>
          <Text style={styles.value}>18.00 Sampai Kampus</Text>
          <Text style={styles.value}>21.40 Pulang Kuliah</Text>
          <Text style={styles.value}>22.20 Sampai Rumah</Text>
          <Text style={styles.value}>22.30 Nonton Dracin</Text>
          <Text style={styles.value}>02.00 Tidur</Text>
        </View>

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => setPage("home")}
        >
          <Text style={styles.loginButtonText}>Kembali</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }

    if (page === "recipe") {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.header}>🍜 RECIPE FAVORIT</Text>

        <View style={styles.infoCard}>
          <Text style={styles.label}>Indomie Goreng Spesial</Text>

          <Text style={styles.value}>Bahan-bahan:</Text>
          <Text style={styles.value}>• 1 bungkus Indomie Goreng</Text>
          <Text style={styles.value}>• 1 butir telur</Text>
          <Text style={styles.value}>• 2 buah sosis</Text>
          <Text style={styles.value}>• 3 butir bakso</Text>

          <Text style={styles.label}>Cara Membuat:</Text>
          <Text style={styles.value}>1. Rebus mie hingga matang lalu tiriskan.</Text>
          <Text style={styles.value}>2. Goreng telur sesuai selera.</Text>
          <Text style={styles.value}>3. Iris lalu tumis sosis dan bakso.</Text>
          <Text style={styles.value}>4. Campurkan mie dengan bumbu.</Text>
          <Text style={styles.value}>5. Tambahkan telur, sosis, dan bakso.</Text>
          <Text style={styles.value}>6. Aduk rata dan sajikan.</Text>
        </View>

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => setPage("home")}
        >
          <Text style={styles.loginButtonText}>Kembali</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
} // <-- PENUTUP FUNGSI App()

const styles = StyleSheet.create({
  // Login
  loginContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#F4F7FE",
  },

  logo: {
    fontSize: 70,
    marginBottom: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#4F46E5",
  },

  subTitle: {
    fontSize: 18,
    color: "#666",
    marginBottom: 30,
  },

  input: {
    width: "100%",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
  },

  loginButton: {
    width: "100%",
    backgroundColor: "#4F46E5",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },

  loginButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  homeContainer: {
    flexGrow: 1,
    backgroundColor: "#F4F7FE",
    padding: 20,
  },

  profileCard: {
    backgroundColor: "#4F46E5",
    padding: 25,
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 25,
    elevation: 8,
  },

  avatar: {
    fontSize: 70,
  },

  name: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },

  nim: {
    color: "#E0E7FF",
    fontSize: 16,
    marginTop: 5,
  },

  menuCard: {
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    elevation: 4,
  },

  menuIcon: {
    fontSize: 28,
    marginRight: 15,
  },

  menuText: {
    fontSize: 18,
    fontWeight: "600",
  },

  container: {
    flex: 1,
    backgroundColor: "#F4F7FE",
    padding: 20,
  },

  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#4F46E5",
  },

  infoCard: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    elevation: 4,
  },

  label: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#4F46E5",
    marginTop: 10,
  },

  value: {
    fontSize: 16,
    color: "#333",
    marginTop: 5,
  },

  backButton: {
    backgroundColor: "#4F46E5",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
});