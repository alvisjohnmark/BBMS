import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAdminStore from "../../stores/adminStore";
import {
  Home,
  Users,
  FileText,
  Calendar,
  AlertCircle,
  LogOut,
  Bell,
  Search,
  Shield,
  BarChart3,
  MapPin,
  UserCheck,
  FileCheck,
  Clock,
  User,
} from "lucide-react";

const AdminDashboard = () => {
  const { logout } = useAdminStore();
  const [activeTab, setActiveTab] = useState("dashboard");
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  const stats = [
    {
      label: "Total Residents",
      value: "2,847",
      icon: Users,
      color: "bg-blue-500",
    },
    {
      label: "Pending Requests",
      value: "23",
      icon: Clock,
      color: "bg-orange-500",
    },
    {
      label: "Completed Today",
      value: "12",
      icon: FileCheck,
      color: "bg-green-500",
    },
    {
      label: "Active Officials",
      value: "15",
      icon: UserCheck,
      color: "bg-purple-500",
    },
  ];

  const recentActivities = [
    {
      type: "Certificate Request",
      resident: "Juan Dela Cruz",
      time: "2 hours ago",
      status: "pending",
    },
    {
      type: "Barangay ID",
      resident: "Maria Santos",
      time: "3 hours ago",
      status: "completed",
    },
    {
      type: "Business Permit",
      resident: "Pedro Reyes",
      time: "5 hours ago",
      status: "processing",
    },
    {
      type: "Clearance",
      resident: "Ana Garcia",
      time: "1 day ago",
      status: "completed",
    },
  ];

  const navigation = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "barangays", label: "Barangays", icon: User },
    { id: "residents", label: "Residents", icon: Users },
    { id: "events", label: "Events", icon: Calendar },
    { id: "reports", label: "Reports", icon: BarChart3 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-sm border-r border-gray-200">
        {/* Logo */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">
                Barangay Portal
              </h1>
              <p className="text-sm text-gray-500">Management System</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4">
          <ul className="space-y-2">
            {navigation.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                    activeTab === item.id
                      ? "bg-blue-50 text-blue-700 border-r-2 border-blue-600"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* User Profile */}
        <div className="absolute bottom-0 w-64 p-4 border-t border-gray-200 bg-white">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-sm font-medium text-gray-700">JD</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">
                Juan Dela Cruz
              </p>
              <p className="text-xs text-gray-500">Barangay Secretary</p>
            </div>
            <button className="text-gray-400" onClick={handleLogout}>
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <MapPin className="w-4 h-4" />
                <span>Bangui, Ilocos Norte</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search residents, documents..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>

              {/* Notifications */}
              <button className="relative p-2 text-gray-400 hover:text-gray-600">
                <Bell className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  3
                </span>
              </button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                    <p className="text-3xl font-bold text-gray-900">
                      {stat.value}
                    </p>
                  </div>
                  <div
                    className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}
                  >
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Activities */}
            <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">
                  Recent Activities
                </h3>
              </div>
              <div className="p-0">
                {recentActivities.map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-6 border-b border-gray-100 last:border-b-0"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                        <FileText className="w-5 h-5 text-gray-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">
                          {activity.type}
                        </p>
                        <p className="text-sm text-gray-500">
                          {activity.resident}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span
                        className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                          activity.status === "completed"
                            ? "bg-green-100 text-green-800"
                            : activity.status === "pending"
                            ? "bg-orange-100 text-orange-800"
                            : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {activity.status}
                      </span>
                      <p className="text-xs text-gray-500 mt-1">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-6">
              {/* Announcements */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Announcements
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-blue-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        Community Meeting
                      </p>
                      <p className="text-xs text-gray-500">
                        Tomorrow at 2:00 PM
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        Vaccination Drive
                      </p>
                      <p className="text-xs text-gray-500">June 15-17, 2025</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  This Month
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">New Residents</span>
                    <span className="text-sm font-medium text-gray-900">
                      45
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">
                      Documents Issued
                    </span>
                    <span className="text-sm font-medium text-gray-900">
                      128
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">
                      Events Conducted
                    </span>
                    <span className="text-sm font-medium text-gray-900">3</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
