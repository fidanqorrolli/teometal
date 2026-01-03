import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Clock, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { businessInfo, services } from '../data/mock';
import { toast } from 'sonner';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (value) => {
    setFormData(prev => ({ ...prev, service: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Mock submission - will be replaced with backend
    setTimeout(() => {
      toast.success('Kërkesa u dërgua me sukses! Do t\'ju kontaktojmë së shpejti.');
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-500 to-blue-600" />
      
      <div className="relative max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-sky-100 px-4 py-2 rounded-full mb-6">
            <span className="text-sky-600 text-sm font-semibold uppercase tracking-wider">Kontakt</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Na <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">Kontaktoni</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Jemi të gatshëm t'ju ndihmojmë me projektin tuaj. Dërgoni kërkesën tuaj ose na thirrni direkt.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Form - Takes more space */}
          <div className="lg:col-span-3 bg-white border border-slate-200 p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-200/50">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center rounded-xl">
                <Send className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-800">Kërko Ofertë</h3>
                <p className="text-slate-500 text-sm">Përgjigjemi brenda 24 orëve</p>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-slate-700 font-medium">Emri *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Emri juaj"
                    className="bg-slate-50 border-slate-200 text-slate-800 placeholder:text-slate-400 focus:border-sky-500 focus:ring-sky-500 h-12 rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-slate-700 font-medium">Telefoni *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+383 4X XXX XXX"
                    className="bg-slate-50 border-slate-200 text-slate-800 placeholder:text-slate-400 focus:border-sky-500 focus:ring-sky-500 h-12 rounded-xl"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-700 font-medium">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="email@shembull.com"
                  className="bg-slate-50 border-slate-200 text-slate-800 placeholder:text-slate-400 focus:border-sky-500 focus:ring-sky-500 h-12 rounded-xl"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="service" className="text-slate-700 font-medium">Shërbimi</Label>
                <Select value={formData.service} onValueChange={handleServiceChange}>
                  <SelectTrigger 
                    className="bg-slate-50 border-slate-200 text-slate-800 h-12 focus:ring-sky-500 rounded-xl"
                  >
                    <SelectValue placeholder="Zgjidhni shërbimin" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-slate-200 rounded-xl">
                    {services.map((service) => (
                      <SelectItem 
                        key={service.id} 
                        value={service.title}
                        className="text-slate-700 hover:bg-sky-50 focus:bg-sky-50 rounded-lg"
                      >
                        {service.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="text-slate-700 font-medium">Mesazhi</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Përshkruani projektin ose kërkesën tuaj..."
                  rows={4}
                  className="bg-slate-50 border-slate-200 text-slate-800 placeholder:text-slate-400 focus:border-sky-500 focus:ring-sky-500 resize-none rounded-xl"
                />
              </div>
              
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-semibold py-4 h-auto text-lg transition-all duration-300 shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50 disabled:opacity-50 rounded-xl"
              >
                {isSubmitting ? (
                  'Duke dërguar...'
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Dërgo Kërkesën
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Cards */}
            <a 
              href={`tel:${businessInfo.phone}`}
              className="group flex items-start gap-4 bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl hover:from-sky-600 hover:to-blue-700 transition-all duration-500"
            >
              <div className="w-14 h-14 bg-white/10 flex items-center justify-center rounded-xl group-hover:bg-white/20 transition-all duration-300">
                <Phone className="w-7 h-7 text-sky-400 group-hover:text-white" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-lg mb-1">Telefon</h4>
                <p className="text-slate-300 group-hover:text-white/90">{businessInfo.phone}</p>
                <p className="text-sky-400 text-sm mt-1 group-hover:text-sky-200">Thirr tani →</p>
              </div>
            </a>
            
            <a 
              href={`mailto:${businessInfo.email}`}
              className="group flex items-start gap-4 bg-white border border-slate-200 p-6 rounded-2xl hover:shadow-xl hover:shadow-sky-500/10 hover:border-sky-200 transition-all duration-500"
            >
              <div className="w-14 h-14 bg-sky-100 flex items-center justify-center rounded-xl group-hover:bg-sky-500 transition-all duration-300">
                <Mail className="w-7 h-7 text-sky-600 group-hover:text-white" />
              </div>
              <div>
                <h4 className="text-slate-800 font-semibold text-lg mb-1">Email</h4>
                <p className="text-slate-500">{businessInfo.email}</p>
              </div>
            </a>
            
            <div className="flex items-start gap-4 bg-white border border-slate-200 p-6 rounded-2xl">
              <div className="w-14 h-14 bg-sky-100 flex items-center justify-center rounded-xl">
                <MapPin className="w-7 h-7 text-sky-600" />
              </div>
              <div>
                <h4 className="text-slate-800 font-semibold text-lg mb-1">Adresa</h4>
                <p className="text-slate-500">{businessInfo.address.full}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 bg-white border border-slate-200 p-6 rounded-2xl">
              <div className="w-14 h-14 bg-sky-100 flex items-center justify-center rounded-xl">
                <Clock className="w-7 h-7 text-sky-600" />
              </div>
              <div>
                <h4 className="text-slate-800 font-semibold text-lg mb-1">Orari</h4>
                <p className="text-slate-500">E Hënë - E Shtunë</p>
                <p className="text-slate-800 font-medium">08:00 - 18:00</p>
              </div>
            </div>

            {/* Google Map */}
            <div className="bg-slate-100 rounded-2xl overflow-hidden h-[200px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23565.09827395877!2d21.026730599999998!3d42.4408333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13549ee691ccaaf5%3A0x70c9ee0fdaae8d47!2sShtime!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Teo Metal Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
