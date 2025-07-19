import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, Plus, Edit, Trash2, LogOut } from 'lucide-react';
import { CountryFlag } from '@/components/CountryFlag';
import { useToast } from '@/hooks/use-toast';

interface Organization {
  id: string;
  name: string;
  country: string;
  price_level_index: number;
  lightning_address: string;
  geyser_url: string;
}

export default function AdminDashboard() {
  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    price_level_index: '',
    lightning_address: '',
    geyser_url: ''
  });
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [error, setError] = useState('');
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (!user) {
      navigate('/admin/login');
      return;
    }
    fetchOrganizations();
  }, [user, navigate]);

  const fetchOrganizations = async () => {
    try {
      const { data, error } = await supabase
        .from('organizations')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setOrganizations(data || []);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const orgData = {
        name: formData.name,
        country: formData.country,
        price_level_index: parseFloat(formData.price_level_index),
        lightning_address: formData.lightning_address,
        geyser_url: formData.geyser_url
      };

      if (editingId) {
        const { error } = await supabase
          .from('organizations')
          .update(orgData)
          .eq('id', editingId);
        
        if (error) throw error;
        toast({ title: 'Organization updated successfully' });
      } else {
        const { error } = await supabase
          .from('organizations')
          .insert(orgData);
        
        if (error) throw error;
        toast({ title: 'Organization created successfully' });
      }

      resetForm();
      fetchOrganizations();
    } catch (error: any) {
      setError(error.message);
    }
  };

  const handleEdit = (org: Organization) => {
    setFormData({
      name: org.name,
      country: org.country,
      price_level_index: org.price_level_index.toString(),
      lightning_address: org.lightning_address,
      geyser_url: org.geyser_url
    });
    setEditingId(org.id);
    setIsDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this organization?')) return;

    try {
      const { error } = await supabase
        .from('organizations')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
      toast({ title: 'Organization deleted successfully' });
      fetchOrganizations();
    } catch (error: any) {
      setError(error.message);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      country: '',
      price_level_index: '',
      lightning_address: '',
      geyser_url: ''
    });
    setEditingId(null);
    setIsDialogOpen(false);
    setError('');
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage organizations</p>
          </div>
          <Button onClick={handleSignOut} variant="outline">
            <LogOut className="mr-2 h-4 w-4" />
            Sign Out
          </Button>
        </div>

        {error && (
          <Alert variant="destructive" className="mb-6">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Organizations</h2>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={() => resetForm()}>
                <Plus className="mr-2 h-4 w-4" />
                Add Organization
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  {editingId ? 'Edit Organization' : 'Add New Organization'}
                </DialogTitle>
                <DialogDescription>
                  Fill in the details for the organization
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="BTC Schule"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Input
                    id="country"
                    value={formData.country}
                    onChange={(e) => setFormData({...formData, country: e.target.value})}
                    placeholder="Burundi"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pli">Price Level Index</Label>
                  <Input
                    id="pli"
                    type="number"
                    step="0.1"
                    value={formData.price_level_index}
                    onChange={(e) => setFormData({...formData, price_level_index: e.target.value})}
                    placeholder="48.9"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lightning">Lightning Address</Label>
                  <Input
                    id="lightning"
                    value={formData.lightning_address}
                    onChange={(e) => setFormData({...formData, lightning_address: e.target.value})}
                    placeholder="btcschule@geyser.fund"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="geyser">Geyser URL</Label>
                  <Input
                    id="geyser"
                    value={formData.geyser_url}
                    onChange={(e) => setFormData({...formData, geyser_url: e.target.value})}
                    placeholder="https://btcpay.satcrowd.com/apps/..."
                    required
                  />
                </div>
                <div className="flex gap-2">
                  <Button type="submit" className="flex-1">
                    {editingId ? 'Update' : 'Create'}
                  </Button>
                  <Button type="button" variant="outline" onClick={resetForm}>
                    Cancel
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Organizations List</CardTitle>
            <CardDescription>
              {organizations.length} organization(s) total
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Flag</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Country</TableHead>
                  <TableHead>PLI</TableHead>
                  <TableHead>Lightning Address</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {organizations.map((org) => (
                  <TableRow key={org.id}>
                    <TableCell>
                      <CountryFlag country={org.country} className="w-6 h-6" />
                    </TableCell>
                    <TableCell className="font-medium">{org.name}</TableCell>
                    <TableCell>{org.country}</TableCell>
                    <TableCell>{org.price_level_index}</TableCell>
                    <TableCell>{org.lightning_address}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleEdit(org)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleDelete(org.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}