-- Create organizations table
CREATE TABLE public.organizations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  country TEXT NOT NULL,
  price_level_index DECIMAL(5,2) NOT NULL,
  lightning_address TEXT NOT NULL,
  geyser_url TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.organizations ENABLE ROW LEVEL SECURITY;

-- Create policies - organizations are viewable by everyone but only modifiable by authenticated users
CREATE POLICY "Organizations are viewable by everyone" 
ON public.organizations 
FOR SELECT 
USING (true);

CREATE POLICY "Authenticated users can insert organizations" 
ON public.organizations 
FOR INSERT 
TO authenticated
WITH CHECK (true);

CREATE POLICY "Authenticated users can update organizations" 
ON public.organizations 
FOR UPDATE 
TO authenticated
USING (true);

CREATE POLICY "Authenticated users can delete organizations" 
ON public.organizations 
FOR DELETE 
TO authenticated
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_organizations_updated_at
  BEFORE UPDATE ON public.organizations
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample data
INSERT INTO public.organizations (name, country, price_level_index, lightning_address, geyser_url) VALUES
('BTC Schule', 'Burundi', 48.9, 'btcschule@geyser.fund', 'https://btcpay.satcrowd.com/apps/'),
('Zambia Bitcoin Education', 'Zambia', 42.1, 'zambiaedu@geyser.fund', 'https://btcpay.satcrowd.com/apps/'),
('Mozambique Crypto Initiative', 'Mozambique', 51.2, 'mozcrypto@geyser.fund', 'https://btcpay.satcrowd.com/apps/');