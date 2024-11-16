import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Lock, 
  User, 
  Github,
  Linkedin,
  ArrowRight
} from 'lucide-react';

interface FormData {
  email: string;
  password: string;
  name: string;
  confirmPassword: string;
  rememberMe: boolean;
  agreeToTerms: boolean;
}

interface InputProps {
  icon: React.ReactNode;
  type: string;
  placeholder: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ icon, type, placeholder, name, value, onChange }) => (
  <div className="relative">
    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
      {icon}
    </div>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all"
    />
  </div>
);

const SocialButton: React.FC<{ icon: React.ReactNode; label: string }> = ({ icon, label }) => (
  <button 
    type="button"
    className="flex items-center justify-center w-full gap-2 px-4 py-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
  >
    {icon}
    <span className="text-sm font-medium text-gray-700">{label}</span>
  </button>
);

const Auth: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');
  const [userType, setUserType] = useState<'freelancer' | 'client'>('freelancer');
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    name: '',
    confirmPassword: '',
    rememberMe: false,
    agreeToTerms: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-sm"
      >
        {/* Logo and Tagline */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">CMSadeq Vision</h2>
          <p className="mt-2 text-gray-600">Empowering Your Ideas with Vision</p>
        </div>

        {/* Tab Switcher */}
        <div className="flex rounded-xl bg-gray-100 p-1">
          {['login', 'signup'].map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab as 'login' | 'signup')}
              className={`
                flex-1 py-2.5 px-4 rounded-lg text-sm font-medium transition-all
                ${activeTab === tab 
                  ? 'bg-white text-gray-900 shadow-sm' 
                  : 'text-gray-500 hover:text-gray-900'
                }
              `}
            >
              {tab === 'login' ? 'Sign In' : 'Sign Up'}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.form
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
            onSubmit={handleSubmit}
          >
            {activeTab === 'login' ? (
              // Login Form
              <>
                <div className="space-y-4">
                  <Input
                    icon={<Mail className="h-5 w-5" />}
                    type="email"
                    name="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  <Input
                    icon={<Lock className="h-5 w-5" />}
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleInputChange}
                      className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                    />
                    <span className="text-sm text-gray-600">Remember me</span>
                  </label>
                  <button 
                    type="button"
                    className="text-sm text-primary-600 hover:text-primary-700"
                  >
                    Forgot password?
                  </button>
                </div>

                <button type="submit" className="btn-primary w-full group">
                  Sign In
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Or continue with</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <SocialButton icon={<Github className="h-5 w-5" />} label="Github" />
                  <SocialButton icon={<Linkedin className="h-5 w-5" />} label="LinkedIn" />
                </div>
              </>
            ) : (
              // Sign Up Form
              <>
                <div className="space-y-4">
                  <Input
                    icon={<User className="h-5 w-5" />}
                    type="text"
                    name="name"
                    placeholder="Full name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                  <Input
                    icon={<Mail className="h-5 w-5" />}
                    type="email"
                    name="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  <Input
                    icon={<Lock className="h-5 w-5" />}
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  <Input
                    icon={<Lock className="h-5 w-5" />}
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                  />

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">I am a:</label>
                    <div className="flex gap-4">
                      {['freelancer', 'client'].map((type) => (
                        <label key={type} className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="userType"
                            value={type}
                            checked={userType === type}
                            onChange={(e) => setUserType(e.target.value as 'freelancer' | 'client')}
                            className="text-primary-600 focus:ring-primary-500"
                          />
                          <span className="text-sm text-gray-600 capitalize">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <label className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleInputChange}
                    className="mt-1 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                  />
                  <span className="text-sm text-gray-600">
                    I agree to the{' '}
                    <a href="#" className="text-primary-600 hover:text-primary-700">
                      Terms of Service
                    </a>{' '}
                    and{' '}
                    <a href="#" className="text-primary-600 hover:text-primary-700">
                      Privacy Policy
                    </a>
                  </span>
                </label>

                <button type="submit" className="btn-primary w-full group">
                  Create Account
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </>
            )}
          </motion.form>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Auth; 