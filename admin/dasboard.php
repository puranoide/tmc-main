
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inicia sesión - TMEDC</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
</head>

<body>
<div class="flex min-h-screen bg-gray-100">
  <!-- Sidebar -->
  <aside class="w-64 bg-white shadow-md">
    <div class="p-6 font-bold text-purple-700 text-2xl">AdminPanel</div>
    <nav class="mt-8">
      <a href="#" class="block py-3 px-6 text-gray-700 hover:bg-purple-100">Dashboard</a>
      <a href="#" class="block py-3 px-6 text-gray-700 hover:bg-purple-100">Users</a>
      <a href="#" class="block py-3 px-6 text-gray-700 hover:bg-purple-100">Analytics</a>
      <a href="#" class="block py-3 px-6 text-gray-700 hover:bg-purple-100">Settings</a>
    </nav>
  </aside>

  <!-- Main Content -->
  <div class="flex-1 flex flex-col">
    <!-- Top Navbar -->
    <header class="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 class="text-xl font-bold text-purple-700">Dashboard</h1>
      <div class="flex items-center gap-4">
        <div class="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold">SR</div>
      </div>
    </header>

    <!-- Content -->
    <main class="p-6 space-y-6">
<div class="grid grid-cols-1 md:grid-cols-4 gap-6">
  <div class="bg-white p-6 rounded-lg shadow-md">
    <p class="text-sm text-gray-500">Medicos Registrados</p>
    <h2 class="text-3xl font-bold text-purple-700 mt-2">1,240</h2>
  </div>
  <div class="bg-white p-6 rounded-lg shadow-md">
    <p class="text-sm text-gray-500">Monto Mensual</p>
    <h2 class="text-3xl font-bold text-green-600 mt-2">$24,500</h2>
  </div>
  <div class="bg-white p-6 rounded-lg shadow-md">
    <p class="text-sm text-gray-500">Medicos por pagar</p>
    <h2 class="text-3xl font-bold text-blue-600 mt-2">320</h2>
  </div>
</div>

<div class="bg-white rounded-lg shadow-md">
  <div class="p-4 border-b font-bold text-purple-700">User List</div>
  <table class="w-full text-left">
    <thead class="bg-purple-50">
      <tr>
        <th class="p-4">Name</th>
        <th class="p-4">Email</th>
        <th class="p-4">Role</th>
        <th class="p-4">Status</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-t">
        <td class="p-4">John Doe</td>
        <td class="p-4">john@example.com</td>
        <td class="p-4">Admin</td>
        <td class="p-4 text-green-600 font-bold">Active</td>
      </tr>
      <tr class="border-t">
        <td class="p-4">Jane Smith</td>
        <td class="p-4">jane@example.com</td>
        <td class="p-4">Editor</td>
        <td class="p-4 text-yellow-500 font-bold">Pending</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="bg-white p-6 rounded-lg shadow-md grid grid-cols-2 md:grid-cols-4 gap-4">
  <button class="bg-purple-600 text-white py-3 rounded-lg shadow hover:bg-purple-700">Add User</button>
  <button class="bg-blue-600 text-white py-3 rounded-lg shadow hover:bg-blue-700">Export Data</button>
  <button class="bg-green-600 text-white py-3 rounded-lg shadow hover:bg-green-700">Generate Report</button>
  <button class="bg-red-600 text-white py-3 rounded-lg shadow hover:bg-red-700">Delete Records</button>
</div>

<div class="bg-white p-6 rounded-lg shadow-md flex items-center gap-6">
  <img src="https://i.pravatar.cc/100" alt="Profile" class="w-20 h-20 rounded-full shadow">
  <div>
    <h3 class="text-xl font-bold text-purple-700">Sophia Ray</h3>
    <p class="text-gray-500">Administrator</p>
    <button class="mt-2 bg-purple-600 text-white px-4 py-2 rounded-lg shadow hover:bg-purple-700">Edit Profile</button>
  </div>
</div>

<footer class="bg-white p-4 mt-10 text-center text-sm text-gray-400 border-t">
  © 2025 AdminPanel. All rights reserved.
</footer>
</body>

</html>     